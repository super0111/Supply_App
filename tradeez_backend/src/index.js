const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

const path = require("path");

require("dotenv").config();

const multer = require("multer");

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

const Quotes = require("./routes/quotes");

const ProductRoutes = require("./routes/products");

const OrderRoutes = require("./routes/orders");

const UserRoutes = require("./routes/users");

const CategoriesRoutes = require("./routes/categories");

const LoginRoutes = require("./routes/login");

const SignupRoutes = require("./routes/signup");

const PaymentRoutes = require("./routes/payments");

const SellerKYCRoutes = require("./routes/sellerkyc");

const SellerProductRoutes = require("./routes/seller_products");

const BuyerInfo = require("./routes/buyerkyc");

const auth = require("./middleware/auth");

// const storage = multer.diskStorage({
//   destination: "./src/images/",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
// });

const upload = multer({ dest: "uploads/" });

app.use(bodyparser.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/quotes", auth, Quotes);

app.use("/product", auth, ProductRoutes);

app.use("/order", auth, OrderRoutes);

app.use("/user", auth, UserRoutes);

app.use("/categories", auth, CategoriesRoutes);

app.use("/login", LoginRoutes);

app.use("/signup", SignupRoutes);

app.use("/payments", auth, PaymentRoutes);

//app.use("/sellerkyc", upload.single("addhar_link"), SellerKYCRoutes);

app.use("/sellerkyc", auth, SellerKYCRoutes);

app.use("/seller-products", auth, SellerProductRoutes);

app.use("/buyerkyc", auth, BuyerInfo);

console.log(process.env);

app.listen(8080, () =>
  console.log("Express server is runnig at port no : 8080")
);

app.get("/employees", (req, res) => {
  res.send("Hello");
});

app.use(express.static("public"));
app.use("/images", express.static("images"));
