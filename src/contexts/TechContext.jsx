import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const addTec = (data) => {
    console.log(data);
  };

  const editTec = (data) => {
    console.log(data);
  };

  const deleteTec = (id) => {
    console.log(id);
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
