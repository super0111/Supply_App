import React from "react";
import { Pagination, Table, Tabs } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthHeader from "../components/AuthHeader";
import { useSelector } from "react-redux";

const pageSize = 6;

const { TabPane } = Tabs;
const SellerEnquires = () => {
  const [data, setData] = useState([]);
  const [confirmationModal, setConfirmationModal] = useState(true);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "productvalue",
      key: "productvalue",
    },
    {
      title: "productname",
      dataIndex: "productname",
      key: "productname",
    },
    {
      title: "created_date",
      dataIndex: "created_date",
      key: "created_date",
    },
    {
      title: "category",
      dataIndex: "name",
      key: "category",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => {
        setConfirmationModal(true);
        return <a>Accept</a>;
      },
    },
  ];
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    fetchQuations();
    console.log(user.user);
  }, []);
  const fetchQuations = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}order/seller/`, {
        params: {
          id: user.user.id,
          status: "WAITING_FOR_SELLER_RESPONSE",
          type: "seller",
        },
        headers: { Authorization: `Bearer ${user.user.token}` },
      })
      .then((response) => {
        setData(response.data);
      });
  };
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
          <h2>Enquires</h2>
        </div>
      </div>
      <div className="content-section">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Recived" key="1">
            <Table
              columns={columns}
              dataSource={data}
              pagination={true}
              position="['bottomCenter']"
            />
          </TabPane>
          <TabPane tab="Finalised" key="2">
            Hellooo
          </TabPane>
        </Tabs>
      </div>
      {/* <Modal title="Basic Modal" visible={confirmationModal}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
    </div>
  );
};

export default SellerEnquires;
