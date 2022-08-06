import { Link, NavLink } from "react-router-dom";
import { buyerMenu, sellerMenu } from "./SideBarData";
import logo from "../../assests/images/logoDash.png";
import { useUserRole } from "../../hooks/auth";
import "../../styles/SideBar.scss";

const SideBar = ({ children, to, ...props }) => {
  const userRole = useUserRole();
  return (
    <aside className="header-wrapper">
      <nav>
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logodash"></img>
        </Link>
        <ul>
          {userRole === "buyer" &&
            buyerMenu.map((val, key) => {
              return (
                <li key={key}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "notactive"
                    }
                    to={val.to}
                  >
                    {val.icon}
                    <span>{val.iconTitle}</span>
                  </NavLink>
                </li>
              );
            })}
          {userRole === "seller" &&
            sellerMenu.map((val, key) => {
              return (
                <li key={key}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "notactive"
                    }
                    to={val.to}
                  >
                    {val.icon}
                    <span>{val.iconTitle}</span>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
