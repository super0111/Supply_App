import React from "react";
import { Pagination, Table, Space, Tabs } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthHeader from "../components/AuthHeader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
        <Space size="middle">
          <a>View</a>
        </Space>
      );
    },
  },
];
const pageSize = 6;

const { TabPane } = Tabs;

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
  const fetchQuations = () => {};
  const MyPagination = ({ total, onChange, current }) => {
    return (
      <Pagination
        onChange={onChange}
        total={total}
        current={current}
        pageSize={pageSize}
      />
    );
  };
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
        <Table
          columns={columns}
          dataSource={data && data.length ? data : []}
          pagination={true}
          position="['bottomCenter']"
        />
      </div>
    </div>
  );
};

export default SellerOrders;
