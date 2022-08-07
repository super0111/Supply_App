import { useState, useEffect } from 'react'
import { Avatar, Card, Col, Row, List } from "antd";
import AuthHeader from "../components/AuthHeader"
import axios from "axios";
import ProductCard from '../components/ProductList/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const product = 1;

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}products/productList/${product}`)
      .then((res) => {
        console.log("res.data", res.data)
        setProducts(res.data);
      });
  };


  return (
    <div className="container_gap">
       <AuthHeader />
       <div className="productList">
          <div className="title">Steel</div>
          <div className="text">Construction Steel</div>
          <Row gutter={[4, 14]} style={{ marginTop: 20 }}>
            {products?.map((d) => {
              return <ProductCard {...d} />;
            })}
          </Row>
       </div>
    </div>
  )
}

export default ProductList