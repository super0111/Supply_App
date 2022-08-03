import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthenticated, useIsSeller } from "../hooks/auth";

const PublicRoute = () => {
  const isAuthenticated = useIsAuthenticated();

  const isSeller = useIsSeller();

  // if the user is authenticated redirect to dashboard
  if (isAuthenticated && isSeller) {
    return <Navigate to="/seller-products" />;
  } else if (isAuthenticated && !isSeller) {
    return <Navigate to="/product" />;
  }

  return <Outlet />;
};

export default PublicRoute;
