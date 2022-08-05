import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedCategory } from "../store/action/productDetails";

import AuthHeader from "../components/AuthHeader";
const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}products`, {
        headers: { Authorization: `Bearer ${user.user.token}` },
      })
      .then((res) => {
        setProducts(res.data);
      });
  };
  const handleRouteChange = (value) => {
    dispatch(selectedCategory(value));
    navigate(`/product/${value.id}`);
  };
  return (
    <div className=" product container_gap">
      <AuthHeader />
      <div className="category_container">
        <h1 className="categories">Categories</h1>
        {/* <div className="category_list">
          {categoriesList?.map((category, index) => (
            <div className="miniCard" key={index}>
              <img src={category.img} alt="stock" />
              <Link className="buttonStyle" to={`/product/${category.route}`}>
                {category.text}
              </Link>
            </div>
          ))}
        </div> */}
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
            {products &&
              products.length &&
              products?.map((category, index) => (
                <div className="p-3">
                  <div className="miniCard" key={index}>
                    <div>
                      <img
                        src={`${process.env.REACT_APP_API_URL}images/categories/${category.name}.png`}
                        alt=""
                      />
                    </div>
                    {/* <Link
                      className="buttonStyle"
                      to={`/product/${category.id}`}
                    >
                      {category.value}
                    </Link> */}
                    <button
                      className="buttonStyle"
                      onClick={(event) =>
                        handleRouteChange({
                          id: category.id,
                          value: category.value,
                        })
                      }
                    >
                      {category.value}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
