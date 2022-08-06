import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Avatar, Card, Col, Row, List } from "antd";
import contextImage from "../../assests/images/ProductsImg/R13.png";
const ProductCard = ({ product_id, title, text, url }) => {

  const navigate = useNavigate()
  const handleSelectProduct= (product_id) => {
    navigate(`/productDetails/${product_id}`)
  }

  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      xl={{ span: 4 }}
      lg={{ span: 6 }}
    >
      <div className="productCard" onClick={()=>handleSelectProduct(product_id)}>
        <div className="card_img">
          <img src={url} />
        </div>
        <div className="text_field">
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
