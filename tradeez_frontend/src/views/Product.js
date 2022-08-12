import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { BsChevronRight } from "react-icons/bs";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import AuthHeader from "../components/AuthHeader";

const product = 1;

const Product = (props) => {
  const userInfo = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
    console.log("productsproducts", products)
  }, []);
  const fetchProduct = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}products/?category=${product}`, {
        headers: { Authorization: `Bearer ${userInfo.user.token}` },
      })
      .then((res) => {
        setProducts(res.data);
      });
  };
  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="category_container content-section">
        <div className="proctScreenContainer">
        <Grid
          container spacing={2}
          sx={{ marginTop: 0 }}
          className="container1"
        >
          <Grid item md={2} sm={3} xs={6} className="container1_col1">
            <span className="container1_col1_title">categories</span>
            {products.map((d, i) => {
              if (i < 6) {
                return (
                  <div key={i} className="innerContainer navlink">
                    <img src={d.img} className="img" />
                    <div className="innerContainermain">
                      <Link
                        style={{ color: "#212738", textDecoration: "none" }}
                        to={`/productList`}
                      >
                        {d.value}
                      </Link>
                    </div>
                  </div>
                );
              }
            })}

            {products.length > 6 ? (
              <div className="showMoreMainContiner">
                <p className="showMoreMainContinerTtile">Show More </p>
                <span style={{ paddingRight: 18 }}>
                  <BsChevronRight />
                </span>
              </div>
            ) : (
              ""
            )}
          </Grid>
          <Grid item md={10} sx={{paddingTop: "0"}} className="container1_col2">
            <div className="main"></div>
          </Grid>
        </Grid>
        </div>
        <div className="proctScreenContainer">
          <div className="productmainConatiner">
            <span className="productTitle">Products</span>
            <Grid 
              container spacing={2}
              sx={{ marginTop: "20px" }}
            >
              {products.map((d) => {
                return <ProductCard {...d} />;
              })}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
