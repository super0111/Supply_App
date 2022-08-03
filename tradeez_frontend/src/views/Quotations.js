import { Pagination, Table, Space, Tabs } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Category",
    dataIndex: "categoryValue",
    key: "categoryValue",
  },
  {
    title: "Product",
    dataIndex: "productvalue",
    key: "productvalue",
  },
  {
    title: "Created Date",
    dataIndex: "created_date",
    key: "created_date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Quantity",
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

const Quotations = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    fetchQuations();
  }, []);
  const fetchQuations = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}order/buyer/`, {
        params: {
          id: user.user.id,
          type: "buyer",
        },
        headers: { Authorization: `Bearer ${token}` },
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
  const handleNavigate = () => {
    navigate("/product");
  };
  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="rfq_container">
        <div className="rfq_container_display">
          <h2>RFQs</h2>
          <button className="rfq_btn" onClick={handleNavigate}>
            Get Quotations
          </button>
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
export default Quotations;
