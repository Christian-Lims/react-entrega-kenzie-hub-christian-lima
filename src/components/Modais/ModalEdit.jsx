import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivModal } from "./styled";
import { ButtonPrimary, ButtonSecundary } from "../Buttons/styled";

const schema = yup.object({
  status: yup.string().required("Status obrigatório!"),
});

export const ModalEdit = () => {
  const { techEdit, close, editTec, deleteTec } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <DivModal>
      <div>
        <div>
          <h1>Tecnologia Detalhes</h1>
          <button onClick={close}>x</button>
        </div>
        <form onSubmit={handleSubmit(editTec)}>
          <label htmlFor="tecnology">Nome do projeto</label>
          <input
            type="text"
            id="tecnology"
            placeholder={techEdit.title}
            disabled
          />
          <label htmlFor="status">Status</label>
          <select id="status" placeholder="Status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <p>{errors.status?.message}</p>
          <div>
            <ButtonPrimary type="submit">Salvar alterações</ButtonPrimary>
            <ButtonSecundary onClick={() => deleteTec(techEdit.id)}>
              Excluir
            </ButtonSecundary>
          </div>
        </form>
      </div>
    </DivModal>
  );
};
