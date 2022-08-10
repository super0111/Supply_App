import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthenticated, useUserRole } from "../hooks/auth";
import SideBar from "./SideBar/SideBar";

const getRedirectUrl = (role) => {
  switch (role) {
    case "seller":
      return "/sellerlogin";
    case "buyer":
      return "/buyerlogin";
    default:
      return "/";
  }
};

const ProtectedRoute = ({ role }) => {
  const isAuthenticated = useIsAuthenticated();
  const userRole = useUserRole();
  if (userRole && role && userRole !== role)
    return <Navigate to={getRedirectUrl(role)} />;

  if (!isAuthenticated) return <Navigate to="/buyerlogin" />;

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SideBar />
      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
