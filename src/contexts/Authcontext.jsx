import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          api.defaults.headers.authorization = `Berear ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.log(error);
          localStorage.clear();
        }
      }

      setLoading(false);
    };
    loadUser();
  }, [user]);

  const registerUser = async (data) => {
    try {
      const res = await api.post("/users", data);
      toast.success("Conta criada!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      navigate("/Login");
    } catch (error) {
      toast.error("E-mail já existe!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      console.log(error.response.data.message);
    }
  };

  const loginUser = async (data) => {
    try {
      const res = await api.post("/sessions", data);
      //localStorage.setItem("@USERID", res.data.user.id);
      localStorage.setItem("@TOKEN", res.data.token);
      toast.success("Sucesso!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      setUser(res.data.user);
      const toNavigate = location.state?.from?.pathname || "/";
      navigate(toNavigate, { replace: true });

      api.defaults.headers.authorization = `Berear ${res.data.token}`;
    } catch (error) {
      toast.error("Senha e/ou email está incorreto!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      console.log(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ registerUser, loginUser, user, setUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
