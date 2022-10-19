import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { AuthContext } from "./Authcontext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { user, techs, setTechs } = useContext(AuthContext);
  const [techEdit, setTechEdit] = useState("");
  const [loadingTec, setLoadingTec] = useState(false);

  const navigate = useNavigate();

  const editTechnology = (tec) => {
    setTechEdit(tec);
    navigate("/EditTech");
  };

  const close = () => {
    setTechEdit("");
    navigate("/");
  };

  const addTec = async (data) => {
    try {
      setLoadingTec(true);
      const res = await api.post("/users/techs", data);
      toast.success("Tecnologia criada!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });

      setTechs([...techs, res.data]);
      navigate("/");
    } catch (error) {
      toast.error("Tecnologia já cadastrada!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      console.error(error.response.data.message);
    }
    setLoadingTec(false);
  };

  const editTec = async (data) => {
    try {
      setLoadingTec(true);
      const res = await api.put(`/users/techs/${techEdit.id}`, data);
      toast.success("Status atualizado!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      navigate("/");
      const newArrTechs = techs.filter((element) => element.id !== techEdit.id);
      setTechs([...newArrTechs, res.data]);
    } catch (error) {
      toast.error("Erro", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      console.error(error.response.data.message);
    }
    setLoadingTec(false);
  };

  const deleteTec = async (id) => {
    try {
      setLoadingTec(true);
      const res = await api.delete(`/users/techs/${id}`);
      toast.success("Tecnologia deletada!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      navigate("/");
      const newArrTechs = techs.filter((element) => element.id !== id);
      setTechs(newArrTechs);
    } catch (error) {
      toast.error("Erro", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      console.error(error.response.data.message);
    }
    setLoadingTec(false);
  };

  return (
    <TechContext.Provider
      value={{
        editTechnology,
        techEdit,
        close,
        addTec,
        editTec,
        deleteTec,
        loadingTec,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
