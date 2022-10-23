import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivModal } from "./styled";
import { ButtonPrimary } from "../Buttons/styled";

export interface iAddTechFormData {
  title: string;
  status: string;
}

const schema = yup.object({
  title: yup.string().required("Tecnologia obrigatória!"),
  status: yup.string().required("Status obrigatório!"),
});

export const ModalAdd = () => {
  const { close, addTec } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAddTechFormData>({
    resolver: yupResolver(schema),
  });

  return (
    <DivModal>
      <div>
        <div>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={close}>x</button>
        </div>
        <form onSubmit={handleSubmit(addTec)}>
          <label htmlFor="tecnology">Nome</label>
          <input
            type="text"
            id="tecnology"
            placeholder="Typescript"
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
          <label htmlFor="status">Selecionar status</label>
          <select id="status" placeholder="Status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>
          <ButtonPrimary type="submit">Cadastrar Tecnologia</ButtonPrimary>
        </form>
      </div>
    </DivModal>
  );
};
