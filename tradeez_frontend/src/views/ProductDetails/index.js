import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthHeader from "../../components/AuthHeader";

import Top from "./Top";
import BoughtTogether from "./BoughtTogether";
import { useSelector } from "react-redux";

const ProductView = () => {
  let { id } = useParams();
  const [ productDetails, setProductDetails] = useState();
  const userInfo = useSelector((state) => state.auth);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}products/productDetails/${id}`, {
        headers: { Authorization: `Bearer ${userInfo.user.token}` },
      })
      .then((res) => {
        setProductDetails(res.data[0]);
      });
  };

  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="details1" style={{ padding: "30px 0px" }}>
        <Top productDetails={productDetails} />
        <BoughtTogether />
      </div>
    </div>
  );
};
export default ProductView;
