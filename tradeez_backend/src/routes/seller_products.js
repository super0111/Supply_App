const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../../connectons");

Router.get("/", (req, res) => {
  mysqlConnection.query(
    "SELECT * from seller_products",
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      }
    }
  );
});

Router.post("/", (req, res) => {
  let requestData = req.body;
  var sql = `INSERT INTO seller_products (user_id, categories_id, products_id, sub_products_id, price, delivery_time, product_quantity ) VALUES 
  ("${requestData.user_id}", "${requestData.categories_id}", "${
    requestData.products_id
  }","${requestData.sub_products_id ? requestData.sub_products_id : ""}", "${
    requestData.price
  }", "${requestData.delivery_time}", "${requestData.product_quantity}")`;
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
  //const sql = `SELECT qa.id, qa.created_date, qa.quantity, qa.quoted_amount, qa.status, qa.quantity_no,  po.name AS productname, qa.quantity, qa.sub_product_id, sp.name from seller_products AS qa INNER JOIN products AS po ON po.id = qa.product_id INNER JOIN sub_products AS sp ON sp.id = qa.sub_product_id  WHERE qa.user_id = "${req.params.id}"`;
  const sql = `SELECT sp.id, sp.price, sp.product_quantity, ca.value AS category, po.value AS product from seller_products as sp INNER JOIN categories AS ca ON ca.id = sp.categories_id  INNER JOIN products AS po ON po.id = sp.products_id  WHERE user_id = "${req.params.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.send(rows);
    }
    res.send(err);
  });
});

Router.put("/:id", (req, res) => {
  //UPDATE `orders` SET `orderAmount` = '101.44' WHERE `orders`.`id`
  let sql = `UPDATE quotations SET status = "${req.body.status}" WHERE id = "${req.params.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ fields });
    }
    res.send(err);
  });
  //let sql = 'SELECT description FROM products WHERE description = ?', req.params.id;
  //let sql = `SELECT * FROM orders WHERE id = "${req.params.id}"`;
  // mysqlConnection.query(sql, (err, rows, fields) => {
  //   if (!err) {
  //     return res.status(200).json({ rows });
  //   }
  //   res.send(err);
  // });
});

module.exports = Router;
