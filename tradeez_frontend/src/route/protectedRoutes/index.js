import { Route, Routes } from "react-router-dom";
import Orders from "../../views/Orders";
import Payment from "../../views/Payment";
import Product from "../../views/Product";
import ProductList from "../../views/ProductList";
import Quotations from "../../views/Quotations";
import Myaccount from "../../views/Myaccount";
import SubProduct from "../../views/SubProduct";
import AddQuote from "../../views/AddQuote";
import ProtectedRoute from "../../components/ProtectedRoute";
import ProductDetails from "../../views/ProductDetails";
import SellerProduct from "../../views/SellerProducts";
import SellerEnquires from "../../views/SellerEnquires";
import SellerAccount from "../../views/SellerAccount";
import SellerPayment from "../../views/SellerPayment";
import SellerOrders from "../../views/SellerOrders";
import SellerAddProduct from "../../views/SellerAddProduct";
import AddAccountDetails from "../../views/AddAccountDetails";

import roles from "../../config/roles";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <div  style={{ display: "flex", flexDirection: "row"}}>
            <ProtectedRoute role={roles.Buyer} />
          </div>
        }
      >
        <Route path="product" element={<Product />} />
        <Route path="productList" element={<ProductList />} />
        <Route path="product/:product/:subproduct" element={<SubProduct />} />
        <Route path="quotations" element={<Quotations />} />
        <Route path="account" element={<Myaccount />} />
        <Route  path="product/:product/:subproduct/addquote" element={<AddQuote />} />
        <Route path="product/:product/addquote" element={<AddQuote />} />
        <Route path="orders" element={<Orders />} />
        <Route path="payment" element={<Payment />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
      </Route>
      <Route path="account-details" element={<AddAccountDetails />} />
      <Route
        element={
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ProtectedRoute role={roles.Seller} />
          </div>
        }
      >
        <Route path="seller-enquires" element={<SellerEnquires />} />
        <Route path="seller-products" element={<SellerProduct />} />
        <Route path="seller-account" element={<SellerAccount />} />
        <Route path="seller-products" element={<SellerProduct />} />
        <Route path="seller-payment" element={<SellerPayment />} />
        <Route path="seller-orders" element={<SellerOrders />} />
        <Route path="seller-addproduct" element={<SellerAddProduct />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
