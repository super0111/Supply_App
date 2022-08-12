import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';

const ProductCard = ({ product_id, title, text, url }) => {

  const navigate = useNavigate()
  const handleSelectProduct= (product_id) => {
    navigate(`/productDetails/${product_id}`)
  }

  return (
    <Grid id={product_id} item lg={2} md={3} sm={6} xs={12}>
      <div className="productCard" onClick={()=>handleSelectProduct(product_id)}>
        <div className="card_img">
          <img src={url} />
        </div>
        <div className="text_field">
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </div>
      </div>
    </Grid>
  );
};

export default ProductCard;
