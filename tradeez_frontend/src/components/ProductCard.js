import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Avatar, Card, Col, Row, List } from "antd";
import contextImage from "../assests/images/ProductsImg/R13.png";
const ProductCard = ({ image, title, value }) => {
  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      xl={{ span: 4 }}
      lg={{ span: 6 }}
    >
      <div className="productCartContainer">
        <div className="main1">
          <img src={contextImage} />
        </div>
        <div className="main2">
          <div className="mainchild1">{title}</div>
          <div className="mainchild2">{value}</div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
