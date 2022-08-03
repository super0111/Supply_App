import React from "react";
//import { Tabs } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthHeader from "../components/AuthHeader";
import { useSelector } from "react-redux";

//const pageSize = 6;

//const { TabPane } = Tabs;

const SellerAccount = () => {
  const user = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAccount();
  }, []);
  const fetchAccount = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}user/`, {
        params: {
          id: user.user.id,
          type: "buyer",
        },
        headers: { Authorization: `Bearer ${user.user.token}` },
      })
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="rfq_container">
        <div className="rfq_container_display">
          <h2>My account</h2>
        </div>
      </div>
      <div className="content-section">
        <ul className="list-group w-100 m-3">
          <li className="list-group-item">
            <div className="d-flex">
              <div className="w-25">Name</div>
              <div className="w-75">{data && data.name ? data.name : ""}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex">
              <div className="w-25">Username:</div>
              <div className="w-75">
                {data && data.username ? data.username : ""}
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex">
              <div className="w-25">Contact:</div>
              <div className="w-75">{data && data.phone ? data.phone : ""}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex">
              <div className="w-25">Email Id:</div>
              <div className="w-75">{data && data.email ? data.email : ""}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex">
              <div className="w-25">Role:</div>
              <div className="w-75">{data && data.role ? data.role : ""}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SellerAccount;
