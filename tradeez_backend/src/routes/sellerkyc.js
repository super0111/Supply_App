const express = require("express");
const multer = require("multer");

const Router = express.Router();
const mysqlConnection = require("../../connectons");

const storage = multer.diskStorage({
  destination: "./src/images/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from directors", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    }
  });
});

// upload.fields([
//   {
//     name: "aadhar_number",
//     maxCount: 1,
//   },
//   {
//     name: "pan_link",
//     maxCount: 1,
//   },
// ]),

Router.post("/", async (req, res) => {
  try {
    let requestData = req.body;
    let image = req.file.addhar_link;
    var sql = `INSERT INTO directors (first_name, middle_name, last_name, email, phone_number, aadhar_number, pan_number, addhar_link, pan_link, company_id ) VALUES 
  ("${requestData.first_name}", "${requestData.middle_name}", "${requestData.last_name}","${requestData.email}", "${requestData.phone_number}", "${requestData.aadhar_number}", "${requestData.pan_number}", "${image}", 
  "${requestData.pan_link}", "${requestData.company_id}" )`;
    mysqlConnection.query(sql, (err, result) => {
      if (!err) {
        return res.status(200).json({ id: result.insertId });
      }
      res.send(req);
    });
  } catch (err) {
    res.send(err);
  }
});

Router.get("/:id", (req, res) => {
  let requestData = req.body;
  //let sql = 'SELECT description FROM products WHERE description = ?', req.params.id;
  //let sql = `SELECT * FROM quotations WHERE user_id = "${req.params.id}"`;
  const sql = `SELECT qa.id, qa.created_date, qa.quantity, qa.quoted_amount, qa.status, qa.quantity_no,  po.name AS productname, qa.quantity, qa.sub_product_id, sp.name from directors AS qa INNER JOIN products AS po ON po.id = qa.product_id INNER JOIN sub_products AS sp ON sp.id = qa.sub_product_id  WHERE qa.user_id = "${req.params.id}"`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({ rows });
    }
    res.send(err);
  });
});

Router.put("/:id", (req, res) => {
  //UPDATE `orders` SET `orderAmount` = '101.44' WHERE `orders`.`id`
  let sql = `UPDATE directors SET status = "${req.body.status}" WHERE id = "${req.params.id}"`;
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
