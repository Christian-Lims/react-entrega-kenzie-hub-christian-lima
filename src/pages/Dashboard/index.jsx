import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { ButtonDefault } from "../../components/Buttons/styled";
import { NavBar, Header, Main, DivMain } from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Authcontext";
import { CardTech } from "../../components/CardTech/CardTech";
//import { TechContext } from "../../contexts/TechContext";

const Dashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  //  const { techEdit } = useContext(TechContext);

  const navigate = useNavigate();

  const goOut = () => {
    localStorage.clear();
    navigate("/Login");
    setUser("");
  };

  const newTec = () => {
    navigate("/AddTech");
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
        <main>
          <DivMain>
            <div>
              <h1>Tecnologias</h1>
              <button onClick={() => newTec()}>+</button>
            </div>

            {!!user.techs.length && (
              <ul>
                {user.techs.map((tech) => (
                  <CardTech key={tech.id} tech={tech} />
                ))}
              </ul>
            )}
            {!user.techs.length && (
              <p>
                Nenhuma tecnologia cadastrada! Cadastre uma nova tecnologia.
              </p>
            )}
          </DivMain>
        </main>
      </Main>
      <Outlet />
    </>
  );
};

export default Dashboard;
