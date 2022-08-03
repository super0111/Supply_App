const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../../connectons");

Router.get("/", (req, res) => {
  let sql = `SELECT * FROM user_info WHERE user_type = "${req.query.type}" AND user_id = "${req.query.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json(...rows);
    }
    res.send(err);
  });
});

Router.post("/", (req, res) => {
  let requestData = req.body;
  var sql = `INSERT INTO user (address, first_name, last_name, city, state, zip, stateAbbr) VALUES ("${requestData.address}", "${requestData.first_name}", "${requestData.last_name}", "${requestData.city}", "${requestData.state}", "${requestData.zip}",  "${requestData.stateAbbr}")`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ message: "ok" });
    }
    res.send(err);
  });
});

Router.get("/:id", (req, res) => {
  //let sql = 'SELECT description FROM products WHERE description = ?', req.params.id;
  let sql = "";
  if (req.query.type === "seller") {
    sql = `SELECT * FROM user WHERE id = "${req.params.id}"`;
  } else {
    sql = `SELECT * FROM user WHERE id = "${req.params.id}"`;
  }
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ rows });
    }
    res.send(err);
  });
});

module.exports = Router;
