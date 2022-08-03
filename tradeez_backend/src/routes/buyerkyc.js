const express = require("express");

const Router = express.Router();
const mysqlConnection = require("../../connectons");

Router.post("/", async (req, res) => {
  try {
    let requestData = req.body;
    var sql = `INSERT INTO buyer_info (id, user_id, company_name, business_type, industry_type, gst_number, manufacture_type, mobile) VALUES (NULL, '${requestData.user_id}', '${requestData.company_name}', '${requestData.business_type}', '${requestData.industry_type}', '${requestData.gst_number}', '${requestData.manufacture_type}', '${requestData.mobile}')`;
    mysqlConnection.query(sql, (err, result) => {
      if (!err) {
        return res.status(200).json({ result });
      }
      res.send(req);
    });
  } catch (err) {
    res.send(err);
  }
});

Router.get("/", (req, res) => {
  const sql = `SELECT * FROM buyer_info WHERE user_id = "${req.query.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json(...rows);
    }
    res.send(err);
  });
});

Router.put("/:id", (req, res) => {
  let sql = `UPDATE directors SET status = "${req.body.status}" WHERE id = "${req.params.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ fields });
    }
    res.send(err);
  });
});

module.exports = Router;
