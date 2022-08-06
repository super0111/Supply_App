import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Avatar, Card, Col, Row, List } from "antd";
import RightOutlined from "@ant-design/icons/RightOutlined";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { selectedProduct } from "../store/action/productDetails";
// import Search from "../assests/images/search.svg";
import AuthHeader from "../components/AuthHeader";

const product = 1;

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.productDetails);
  const userInfo = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProduct();
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
  
  const handleNavigation = (category) => {
    dispatch(selectedProduct(category));
    navigate(`/products/${category.id}/addquote`);
  };
  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="category_container content-section">
        <div className="proctScreenContainer container">
          <Row
            gutter={[16, 16]}
            style={{ marginTop: 20 }}
            className="container1"
          >
            <Col
              className="container1_col1"
              xs={{ span: 24 }}
              md={{ span: 6 }}
              xl={{ span: 4 }}
              lg={{ span: 5 }}
            >
              <span className="container1_col1_title">categories</span>
              {products.map((d, i) => {
                if (i < 6) {
                  return (
                    <div className="innerContainer">
                      <Avatar src={d.img} />
                      <div className="innerContainermain">
                        <Link
                          className="buttonStyle text-decation-none"
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
                    <RightOutlined />
                  </span>
                </div>
              ) : (
                ""
              )}
            </Col>

            <Col
              xs={{ span: 24 }}
              md={{ span: 18 }}
              xl={{ span: 20 }}
              lg={{ span: 19 }}
              style={{ width: "100%" }}
              className="container1_col2"
            >
              <div className="main"></div>
            </Col>
          </Row>
        </div>
        <div className="container proctScreenContainer">
          <div className="productmainConatiner">
            <span className="productTitle">Products</span>
            <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
              {products.map((d) => {
                return <ProductCard {...d} />;
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
