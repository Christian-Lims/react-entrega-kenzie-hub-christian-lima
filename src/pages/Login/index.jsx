import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { ContainerForm, DivForm } from "../../components/FormStyled/styled";
import {
  ButtonSecundary,
  ButtonPrimary,
} from "../../components/Buttons/styled";
import { DivHeader, Parag, Title } from "./styled";

const schema = yup.object({
  email: yup.string().required("Email é obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

const Login = ({ toRegister, setUser }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = (data) => {
    reset();
    api
      .post("/sessions", data)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("@USERID", res.data.user.id);
        localStorage.setItem("@TOKEN", res.data.token);
        toast.success("Sucesso!", {
          position: "top-right",
          autoClose: 2000,
          theme: "dark",
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error("Senha e/ou email está incorreto!", {
          position: "top-right",
          autoClose: 2000,
          theme: "dark",
        });
        console.log(err.response.data.message);
      });
  };

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
        <Parag>Ainda não possui uma conta?</Parag>
        <ButtonSecundary onClick={() => toRegister()}>
          Cadastre-se
        </ButtonSecundary>
      </DivForm>
    </ContainerForm>
  );
};

export default Login;
