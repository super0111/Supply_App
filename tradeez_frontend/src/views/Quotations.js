import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import { BiCylinder } from "react-icons/bi";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tabs, Tab } from '@mui/material';

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
        <div size="middle">
          <a>View</a>
        </div>
      );
    },
  },
];

const Quotations = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth);
  const [ tabValue, setTabValue ] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
      <div className="d-flex flex-column content-section">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="wrapped label tabs example"
          sx={{
            borderBottom: "1px solid #dad4d4",
          }}
        >
          <Tab
            value="1"
            label="Recived"
            wrapped
          />
          <Tab value="2" label="Finalised" />
        </Tabs>
        { 
          tabValue === "1" ?
          <>
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
                  {
                    data.length > 0 ?
                    data.map((row, i)=> (
                      <TableRow>
                        <TableCell align="center">{i+1}</TableCell>
                        <TableCell align="center">{row.categoryValue}</TableCell>
                        <TableCell align="center">{row.productvalue}</TableCell>
                        <TableCell align="center">{row.created_date}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell align="center">{row.quantity}</TableCell>
                        <TableCell align="center">active</TableCell>
                      </TableRow>
                      ))
                      : ""
                    }
                </TableBody>
              </Table>
            </TableContainer>
            {
              data.length > 0 ? "" :
              <div className="d-flex justify-content-center w-100 mt-4">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div>
                    <BiCylinder size={30} color="#898E95" />
                  </div>
                  <div style={{color: "#898E95"}}>No Data</div>
                  </div>
              </div>
            }
          </>
          : tabValue === "2" ? <div style={{margin: "20px"}}>Hoooooo</div> 
          : ""
        }
      </div>
    </div>
  );
};
export default Quotations;
