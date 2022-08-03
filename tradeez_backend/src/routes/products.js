const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../../connectons");

Router.get("/", (req, res) => {
  let sql = "";
  if (req.query.product && req.query.category) {
    sql = `SELECT id,name,value from sub_products WHERE categories_type = "${req.query.category}" AND product_type = "${req.query.product}" `;
  } else if (req.query.category && !req.query?.product) {
    sql = `SELECT id,name,value,sub_category_available from products WHERE categories_type = "${req.query.category}" `;
  } else {
    sql = "SELECT id,name,value from categories";
  }
  //const sql = `SELECT po.id, po.name, po.product_long_desc, ca.category_name, ca.category_value, sc.sub_category_name, sc.sub_category_value from products AS po INNER JOIN categories AS ca ON po.category_id = ca.category_id INNER JOIN sub_category AS sc ON sc.sub_category_id = po.sub_category_id`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json([...rows]);
    }
    res.send(err);
  });
});

Router.post("/", (req, res) => {
  let requestData = req.body;
  var sql = `INSERT INTO products (availableItems, description, eksaathPrice, mrpPerQuanity, productCategory, productName, quanityType, soldCounts, thumbImage) VALUES 
  ("${requestData.availableItems}", "${requestData.description}", "${requestData.eksaathPrice}", "${requestData.mrpPerQuanity}","${requestData.productCategory}", "${requestData.productName}", "${requestData.quanityType}", "${requestData.soldCounts}", "${requestData.thumbImage}")`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ message: "ok" });
    }
    res.send(err);
  });
});

Router.get("/:id", (req, res) => {
  //const sql = `SELECT po.id, po.name, po.product_long_desc, ca.category_name, ca.category_value, sc.sub_category_name, sc.sub_category_value from products AS po INNER JOIN categories AS ca ON po.category_id = ca.category_id INNER JOIN sub_category AS sc ON sc.sub_category_id = po.sub_category_id  WHERE po.id = "${req.params.id}"`;
  //const sql = `SELECT qa.quantity, po.name, sp.name from quotations AS qa INNER JOIN products AS po ON po.id = qa.product_id INNER JOIN sub_products AS sp ON sp.id = qa.sub_product_id  WHERE qa.id = "${req.params.id}"`;
  const sql = `SELECT qa.quantity, qa.sub_product_id, sp.name from quotations AS qa INNER JOIN sub_products AS sp ON sp.id = qa.sub_product_id  WHERE qa.id = "${req.params.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json(rows);
    }
    res.send(err);
  });
});

module.exports = Router;
