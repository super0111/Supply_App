const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const Router = express.Router();
const mysqlConnection = require("../../connectons");

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from user", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

Router.post("/", (req, res) => {
  let requestData = req.body;
  let userType = requestData.type;
  if (!(requestData.email && requestData.password && requestData.name)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }
  let emailpresent;
  if (userType === "seller") {
    emailpresent = `SELECT * FROM seller WHERE email = "${requestData.email}"`;
  } else {
    emailpresent = `SELECT * FROM buyer WHERE email = "${requestData.email}"`;
  }
  mysqlConnection.query(emailpresent, async (err, rows, fields) => {
    if (rows.length > 1) {
      return res.status(400).send({ error: "email already present" });
    }
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    requestData.password = await bcrypt.hash(requestData.password, salt);
    let sql;
    if (userType === "seller") {
      sql = `INSERT INTO seller (name, password, email) VALUES ("${requestData.name}", "${requestData.password}", "${requestData.email}")`;
    } else {
      sql = `INSERT INTO buyer (name, password, email) VALUES ("${requestData.name}", "${requestData.password}", "${requestData.email}")`;
    }
    mysqlConnection.query(sql, (err, rows) => {
      const token = jwt.sign(
        { user_id: rows.insertId, email: requestData.email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "2h",
        }
      );
      if (!err) {
        return res.status(200).json({
          id: rows.insertId,
          name: requestData.name,
          token: token,
          type: userType,
          email: requestData.email,
        });
      }
      res.send(err);
    });
  });
});

module.exports = Router;
