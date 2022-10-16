import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { ContainerForm, DivForm } from "../../components/FormStyled/styled";
import { ButtonPrimary } from "../../components/Buttons/styled";
import { DivHeader, DivFooter, Title } from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Authcontext";

const schema = yup.object({
  email: yup.string().required("Email é obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerForm>
      <DivHeader>
        <Logo />
      </DivHeader>
      <DivForm>
        <Title>Login</Title>
        <form onSubmit={handleSubmit(loginUser)}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <ButtonPrimary type="submit">Entrar</ButtonPrimary>
        </form>
        <DivFooter>
          <p>Ainda não possui uma conta?</p>
          <Link to={"/Register"}>Cadastre-se</Link>
        </DivFooter>
      </DivForm>
    </ContainerForm>
  );
};

export default Login;
