const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../../connectons");

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from payments", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

Router.post("/", (req, res) => {
  let requestData = req.body;
  let credtedDate = new Date(requestData.created_date)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  let deliveryDate = new Date(requestData.expected_delivery_date)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  var sql = `INSERT INTO payments (created_date, quantity, quoted_amount, quantity_no, status, category_id, user_id, product_id, sub_product_id, remarks, expected_delivery_date ) VALUES 
  ("${credtedDate}", "${requestData.quantity}", "${requestData.quoted_amount}","${requestData.quantity_no}", "${requestData.status}", "${requestData.category_id}", "${requestData.user_id}", 
  "${requestData.product_id}", "${requestData.sub_product_id}","${requestData.remarks}","${deliveryDate}" )`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ message: "ok" });
    }
    res.send(err);
  });
});

Router.get("/:id", (req, res) => {
  let requestData = req.body;
  //let sql = 'SELECT description FROM products WHERE description = ?', req.params.id;
  //let sql = `SELECT * FROM quotations WHERE user_id = "${req.params.id}"`;
  const sql = `SELECT * FROM payments WHERE id = "${req.params.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ rows });
    }
    res.send(err);
  });
});

Router.put("/:id", (req, res) => {
  let sql = `UPDATE payments SET status = "${req.body.status}" WHERE id = "${req.params.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ fields });
    }
    res.send(err);
  });
});

module.exports = Router;
