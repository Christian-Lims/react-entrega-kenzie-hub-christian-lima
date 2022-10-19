import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/Authcontext";
import { Loading } from "../Loading/Loading";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (!!loading) {
    return <Loading></Loading>;
  }
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
