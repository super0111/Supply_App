const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../../connectons");

Router.get("/seller", (req, res) => {
  let sql = "";
  if (req.query.id && req.query.status) {
    sql = `SELECT orders.id, orders.created_date, orders.quantity, orders.quoted_amount, orders.status, orders.quantity_no,  po.name AS productvalue, orders.quantity, orders.sub_product_id from orders INNER JOIN products AS po ON po.id = orders.product_id  WHERE orders.seller_id = "${req.query.id}" AND orders.status = "${req.query.status}"`;
  } else {
    sql = `SELECT orders.id, orders.created_date, orders.quantity, orders.quoted_amount, orders.status, orders.quantity_no,  po.name AS productvalue, orders.quantity, orders.sub_product_id from orders INNER JOIN products AS po ON po.id = orders.product_id  WHERE orders.seller_id = "${req.query.id}" AND orders.status <> "CONFIRMED"`;
  }
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});
Router.get("/buyer", (req, res) => {
  let sql = "";
  if (req.query.id && !req.query.status) {
    sql = `SELECT orders.id, orders.created_date, orders.quantity, orders.quoted_amount, orders.status, orders.quantity_no, ca.value AS categoryValue,  po.value AS productvalue, orders.quantity, orders.sub_product_id from orders INNER JOIN products AS po ON po.id = orders.product_id INNER JOIN categories AS ca ON ca.id = orders.category_id  WHERE orders.user_id = "${req.query.id}" AND orders.status <> "CONFIRMED"`;
  } else {
    sql = `SELECT orders.id, orders.created_date, orders.quantity, orders.quoted_amount, orders.status, orders.quantity_no, ca.value AS categoryValue,  po.value AS productvalue, orders.quantity, orders.sub_product_id from orders INNER JOIN products AS po ON po.id = orders.product_id INNER JOIN categories AS ca ON ca.id = orders.category_id  WHERE orders.user_id = "${req.query.id}" AND orders.status = "${req.query.status}"`;
  }
  mysqlConnection.query(sql, (err, rows, fields) => {
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
  var sql = `INSERT INTO orders (created_date, quantity, quoted_amount, quantity_no, status, category_id, user_id, product_id, sub_product_id, remarks, expected_delivery_date ) VALUES 
  ("${credtedDate}", "${requestData.quantity}", "${
    requestData.quoted_amount
  }","${requestData.quantity_no}", "${requestData.status}", "${
    requestData.category_id
  }", "${requestData.user_id}", 
  "${requestData.product_id}", "${
    requestData.sub_product_id ? requestData.sub_product_id : null
  }","${requestData.remarks}","${deliveryDate}" )`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ message: "ok" });
    }
    res.send(err);
  });
});

Router.get("/:id", (req, res) => {
  //let sql = 'SELECT description FROM products WHERE description = ?', req.params.id;
  //let sql = `SELECT * FROM quotations WHERE user_id = "${req.params.id}"`;
  const sql = `SELECT orders.id, orders.created_date, orders.quantity, orders.quoted_amount, orders.status, orders.quantity_no, po.name AS productvalue, orders.quantity, orders.sub_product_id from orders INNER JOIN products AS po ON po.id = orders.product_id  WHERE orders.user_id = "${req.params.id}" AND orders.status = "${req.params.status}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ rows });
    }
    res.send(err);
  });
});

Router.put("/:id", (req, res) => {
  //UPDATE `orders` SET `orderAmount` = '101.44' WHERE `orders`.`id`
  let sql = `UPDATE orders SET status = "${req.body.status}" WHERE id = "${req.params.id}"`;
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
