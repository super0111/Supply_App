const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Router = express.Router();
const dotenv = require("dotenv");

const mysqlConnection = require("../../connectons");

dotenv.config();

Router.get("/", async (req, res) => {
  mysqlConnection.query("SELECT * from orders", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

Router.post("/", async (req, res) => {
  const data = req.body;

  console.log("dataaa", data)

  let getUser;

  if (data.type === "seller") {
    getUser = `SELECT * FROM seller WHERE email = "${data.email}"`;
  } else {
    getUser = `SELECT * FROM buyer WHERE email = "${data.email}"`;
  }
  mysqlConnection.query(getUser, async (err, rows, fields) => {
    let getuser = Object.values(JSON.parse(JSON.stringify(rows)));
    if (getuser.length && getuser[0]) {
      const validPassword = await bcrypt.compare(
        data.password,
        getuser[0].password
      );
      const user = getuser[0];
      if (validPassword) {
        const token = jwt.sign(
          { user_id: user.id, email: user.email, type: data.type },
          process.env.TOKEN_SECRET,
          {
            expiresIn: "2h",
          }
        );
        res.status(200).json({
          token,
          name: user.name,
          email: user.email,
          id: user.id,
          userType: data.type,
        });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  });
});

module.exports = Router;
