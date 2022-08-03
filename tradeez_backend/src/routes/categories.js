const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../../connectons");

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from categories", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

Router.post("/", (req, res) => {
  let requestData = req.body;
  var sql = `INSERT INTO categories (availableItems, description, eksaathPrice, mrpPerQuanity, productCategory, productName, quanityType, soldCounts, thumbImage) VALUES 
  ("${requestData.availableItems}", "${requestData.description}", "${requestData.eksaathPrice}", "${requestData.mrpPerQuanity}","${requestData.productCategory}", "${requestData.productName}", "${requestData.quanityType}", "${requestData.soldCounts}", "${requestData.thumbImage}")`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ message: "ok" });
    }
    res.send(err);
  });
});

Router.get("/:id", (req, res) => {
  //let sql = 'SELECT description FROM products WHERE description = ?', req.params.id;
  let sql = `SELECT * FROM categories WHERE sellerId = "${req.params.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ rows });
    }
    res.send(err);
  });
});

module.exports = Router;
