import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iAddTechFormData } from "../components/Modais/ModalAdd";
import { iEditTechFormData } from "../components/Modais/ModalEdit";
import api, { iApiError } from "../services/api";
import { AuthContext, iTechs } from "./Authcontext";

interface iTechContextProps {
  children: React.ReactNode;
}

interface iTechEdit {
  title?: string;
  status: string;
  id?: string;
}

interface iTechContext {
  editTechnology: (tec: iTechs) => void;
  techEdit: iTechEdit | null;
  close: () => void;
  addTec: (data: iAddTechFormData) => Promise<void>;
  editTec: (data: iEditTechFormData) => Promise<void>;
  deleteTec: (id: string | undefined) => Promise<void>;
  loadingTec: boolean;
}

export const TechContext = createContext({} as iTechContext);

const TechProvider = ({ children }: iTechContextProps) => {
  const { techs, setTechs } = useContext(AuthContext);
  const [techEdit, setTechEdit] = useState<iTechEdit | null>(null);
  const [loadingTec, setLoadingTec] = useState<boolean>(false);

  const navigate = useNavigate();

  const editTechnology = (tec: iTechs) => {
    setTechEdit(tec);
    navigate("/EditTech");
  };

  const close = () => {
    setTechEdit(null);
    navigate("/");
  };

  const addTec = async (data: iAddTechFormData) => {
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
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data.message);
    }
    setLoadingTec(false);
  };

  const editTec = async (data: iEditTechFormData) => {
    try {
      setLoadingTec(true);
      const res = await api.put(`/users/techs/${techEdit?.id}`, data);
      toast.success("Status atualizado!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
      navigate("/");
      const newArrTechs = techs.filter(
        (element) => element.id !== techEdit?.id
      );
      setTechs([...newArrTechs, res.data]);
    } catch (error) {
      toast.error("Erro", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });

      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data.message);
    }
    setLoadingTec(false);
  };

  const deleteTec = async (id: string | undefined) => {
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
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data.message);
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
