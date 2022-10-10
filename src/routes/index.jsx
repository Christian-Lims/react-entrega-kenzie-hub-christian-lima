import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const back = () => navigate(-1);
  const toRegister = () => navigate("/Register");

  return (
    <Routes>
      <Route
        path="/Login"
        element={<Login toRegister={toRegister} setUser={setUser} />}
      />
      <Route path="/Register" element={<Register back={back} />} />
      <Route path="/" element={<Dashboard user={user} setUser={setUser} />} />
      <Route path="*" element={<Navigate to="/Login" />} />
    </Routes>
  );
};

export default RoutesMain;
