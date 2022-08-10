import { Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import BuyerLogin from "../../views/BuyerLogin";
import SellerKYC from "../../views/SellerKYC";
import BuyerSignup from "../../views/BuyerSignup";
import SellerLogin from "../../views/SellerLogin";
import SellerSignup from "../../views/SellerSingup";
import PublicRoute from "../../components/PublicRoute";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PublicRoute />}>
        <Route path="buyerLogin" element={<BuyerLogin />} />
        <Route path="buyersignup" element={<BuyerSignup />} />
        <Route path="sellerlogin" element={<SellerLogin />} />
        <Route path="sellersignup" element={<SellerSignup />} />
        <Route path="kyc" element={<SellerKYC />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
