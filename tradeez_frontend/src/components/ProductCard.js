import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import contextImage from "../assests/images/ProductsImg/R13.png";

const ProductCard = ({ id, image, title, value }) => {
  const navigate = useNavigate()

  return (
    <Grid key={id} item md={2}>
      <div style={{padding: "5px"}}>
        <div className="productCartContainer">
          <div className="main1">
            <img src={contextImage} />
          </div>
          <div className="main2">
            <div className="mainchild1">{title}</div>
            <div className="mainchild2">{value}</div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ProductCard;
