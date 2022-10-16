import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [techEdit, setTechEdit] = useState("");
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
      const res = await api.post("/users/techs", data);
      toast.success("Tecnologia criada!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      toast.error("Tecnologia já cadastrada!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      console.log(error.response.data.message);
    }
  };

  const editTec = async (data) => {
    try {
      const res = await api.put(`/users/techs/${techEdit.id}`, data);
      toast.success("Status atualizado!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      toast.error("Erro", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      console.log(error.response.data.message);
    }
  };

  const deleteTec = async (id) => {
    try {
      const res = await api.delete(`/users/techs/${id}`);
      toast.success("Tecnologia deletada!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      toast.error("Erro", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      console.log(error.response.data.message);
    }
  };

  return (
    <TechContext.Provider
      value={{ editTechnology, techEdit, close, addTec, editTec, deleteTec }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
