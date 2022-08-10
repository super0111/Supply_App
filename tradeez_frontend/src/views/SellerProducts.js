import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthHeader from "../components/AuthHeader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "quantity",
    dataIndex: "product_quantity",
    key: "product_quantity",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <div size="middle">
          <a>View</a>
        </div>
      );
    },
  },
];

const SellerOrders = () => {
  
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}seller-products/${user.user.id}`, {
        headers: { Authorization: `Bearer ${user.user.token}` },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="rfq_container">
        <div className="rfq_container_display">
          <h2>Orders</h2>
        </div>
      </div>
      <div className="content-section d-flex flex-column">
        <div className="d-flex">
          <Link to="/seller-addProduct">Add Product</Link>
        </div>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{height: "50px", background: "#fafbf9"}}>
                  <TableRow>
                    {columns.map((item, i)=>(
                      <TableCell align="center">{item.title}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>        
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
      </div>
    </div>
  );
};

export default SellerOrders;
