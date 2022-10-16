import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { CardBtn } from "./styled";

export const CardTech = ({ tech }) => {
  const { editTechnology } = useContext(TechContext);

  return (
    <CardBtn onClick={() => editTechnology(tech)}>
      <li>
        <h2>{tech.title}</h2>
        <p>{tech.status}</p>
      </li>
    </CardBtn>
  );
};
