import { Table, Space, Tabs } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthHeader from "../components/AuthHeader";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
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

const Payment = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    fetchQuations();
  }, []);
  const fetchQuations = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}payments/1`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response.data.rows);
      });
  };
  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="rfq_container">
        <div className="rfq_container_display">
          <h2>Payments</h2>
        </div>
        <p className="quotations">4 Quotations</p>
        <div className="flex_container">
          <div className="quotations_container">
            <div className="bg_container">
              <p className="orders">0</p>
            </div>
            <p className="application">Application</p>
          </div>
          <div className="contain">
            <div className="order_container">
              <p className="orders">0</p>
            </div>
            <p className="application">Orders</p>
          </div>
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
    </div>
  );
};
export default Payment;
