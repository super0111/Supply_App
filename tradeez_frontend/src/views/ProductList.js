import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import AuthHeader from "../components/AuthHeader";
import axios from "axios";
import ProductCard from "../components/ProductList/ProductCard";

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
        setProducts(res.data);
      });
  };

  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="category_container content-section productList">
        <div className="d-flex flex-column">
          <div className="title">Steel</div>
          <div className="text">Construction Steel</div>
        </div>
        <Grid
          container spacing={2}
          sx={{ marginTop: "20px" }}
        >
          {products?.map((d) => {
            return <ProductCard {...d} />;
          })}
        </Grid>
      </div>
    </div>
  );
};

export default ProductList;
