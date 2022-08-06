import { Link } from "react-router-dom";
import logo from "../assests/images/logo.svg";
import { useIsAuthenticated } from "../hooks/auth";
import User from "./User";

const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <header className="header">
      <div className="container-xxl d-flex justify-content-lg-between justify-content-md-between ">
        <div className="logo">
          <img src={logo} alt="" style={{ width: "80%", height: "90%" }} />
        </div>

        {isAuthenticated ? (
          <User />
        ) : (
          <div className="d-flex">
            <Link
              style={{
                display: "table-cell",
                verticalAlign: "super",
                height: "40px",
                width: "150px",
                border: "1px solid black",
                fontSize: "15px",
                fontWeight: "700",
                fontFamily: "Poppins",
              }}
              to="/buyerlogin"
              className="btn btn-light"
            >
              Log In
            </Link>
            <Link
              style={{
                display: "table-cell",
                verticalAlign: "super",
                height: "40px",
                width: "150px",
                border: "1px solid black",
                fontWeight: "700",
                fontSize: "15px",
                fontFamily: "Poppins",
              }}
              to="/sellerlogin"
              className="btn btn-dark"
            >
              Supplier{" "}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
