import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { ButtonDefault } from "../../components/Buttons/styled";
import { NavBar, Header, Main } from "./styled";
import { useEffect } from "react";

const Dashboard = ({ user, setUser }) => {
  const token = localStorage.getItem("@TOKEN");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || token === "undefined") {
      navigate("/Login");
    }
  }, []);

  const goOut = () => {
    localStorage.clear();
    navigate("/Login");
    setUser("");
  };
  return (
    <>
      <NavBar>
        <div>
          <Logo />
          <ButtonDefault onClick={goOut}>Sair</ButtonDefault>
        </div>
      </NavBar>
      <Header>
        <div>
          <h1>Olá, {user.name}</h1>
          <span>{user.course_module}</span>
        </div>
      </Header>
      <Main>
        <div>
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </Main>
    </>
  );
};

export default Dashboard;
