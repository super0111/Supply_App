import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AuthHeader from "../components/AuthHeader";

const SubProduct = () => {
  let { product, subproduct } = useParams();
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);
  
  const fetchProduct = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}products/?category=${product}&product=${subproduct}`,
    }).then((res) => {
      setCategoriesList(res.data);
    });
  };

  return (
    <div className=" product container_gap">
      <AuthHeader />
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
          {categoriesList &&
            categoriesList.length &&
            categoriesList?.map((category, index) => (
              <div key={index} className="p-3">
                <div className="miniCard" key={index}>
                  <img src={category.img} alt="stock" />
                  <Link
                    className="buttonStyle"
                    to={`/products/${product}/${subproduct}/addquote`}
                  >
                    {category.value}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SubProduct;
