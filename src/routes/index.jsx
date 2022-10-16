import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ModalAdd } from "../components/Modais/ModalAdd";
import { ModalEdit } from "../components/Modais/ModalEdit";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register back={back} />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />}>
          <Route path="/AddTech" element={<ModalAdd />} />
          <Route path="/EditTech" element={<ModalEdit />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
