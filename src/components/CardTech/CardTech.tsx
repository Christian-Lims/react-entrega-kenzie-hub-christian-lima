import { useContext } from "react";
import { iTechs } from "../../contexts/Authcontext";
import { TechContext } from "../../contexts/TechContext";
import { CardLi } from "./styled";

interface iCardTechProps {
  tech: iTechs;
}

export const CardTech = ({ tech }: iCardTechProps) => {
  const { editTechnology } = useContext(TechContext);

  return (
    <CardLi onClick={() => editTechnology(tech)}>
      <h2>{tech.title}</h2>
      <p>{tech.status}</p>
    </CardLi>
  );
};
