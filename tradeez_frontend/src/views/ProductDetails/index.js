import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Top from "./Top"
import BoughtTogether from "./BoughtTogether"
import { useDispatch, useSelector } from "react-redux";

const ProductView = () => {
  let { id } = useParams();
  const [ productDetails, setProductDetails ] = useState();
  const userInfo = useSelector((state) => state.auth);
  console.log("userInfo", userInfo)
  useEffect(()=>{ 
    fetchProductDetails()
  }, [])

  const fetchProductDetails = () => {
    console.log("fetch id",id)
    axios
      .get(`${process.env.REACT_APP_API_URL}products/productDetails/${id}`, {
        headers: { Authorization: `Bearer ${userInfo.user.token}` },
      })
      .then((res) => {
        setProductDetails(res.data[0]);
      });
  };

  return (
    <div className="details1">
      <Top productDetails={productDetails}/>
      <BoughtTogether />
    </div>
  )
}
export default ProductView