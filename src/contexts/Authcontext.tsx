import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginFormData } from "../pages/Login";
import { iRegisterFormData } from "../pages/Register";
import api, { iApiError } from "../services/api";

interface iAuthContextProps {
  children: React.ReactNode;
}

interface iAuthContext {
  registerUser(data: iRegisterFormData): Promise<void>;
  loginUser: (data: iLoginFormData) => Promise<void>;
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  techs: iTechs[];
  setTechs: React.Dispatch<React.SetStateAction<iTechs[]>>;
}

interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string | null;
  contact: string | null;
  techs: iTechs[];
}

export interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

export const AuthContext = createContext({} as iAuthContext);

const AuthProvider = ({ children }: iAuthContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [techs, setTechs] = useState([] as iTechs[]);
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
          setTechs(data.techs);
        } catch (error) {
          const requestError = error as AxiosError<iApiError>;
          console.error(requestError.response?.data.message);
          localStorage.clear();
        }
      }

      setLoading(false);
    };
    loadUser();
  }, []);

  const registerUser = async (data: iRegisterFormData) => {
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
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data.message);
    }
  };

  const loginUser = async (data: iLoginFormData) => {
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
      setTechs(res.data.user.techs);
      const toNavigate = location.state?.from?.pathname || "/";
      navigate(toNavigate, { replace: true });

      api.defaults.headers.authorization = `Berear ${res.data.token}`;
    } catch (error) {
      toast.error("Senha e/ou email está incorreto!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loginUser,
        user,
        setUser,
        loading,
        techs,
        setTechs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
