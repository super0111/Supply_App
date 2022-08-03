import ProtectedRoutes from "./protectedRoutes";
import PublicRoutes from "./publicRoute";

const AppRoutes = () => {
  return (
    <>
      <ProtectedRoutes />
      <PublicRoutes />
    </>
  );
};

export default AppRoutes;
