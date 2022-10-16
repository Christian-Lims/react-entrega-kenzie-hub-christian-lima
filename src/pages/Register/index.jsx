import { useForm } from "react-hook-form";
import Logo from "../../components/Logo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerForm, DivForm } from "../../components/FormStyled/styled";
import { ButtonDefault, ButtonPrimary } from "../../components/Buttons/styled";
import { DivHeader, FormHeader } from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Authcontext";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório!"),
  email: yup.string().email("Email inválido!").required("Email é obrigatório!"),
  password: yup
    .string()
    .min(8, "Deve conter pelo menos 8 caracteres!")
    .matches(/[A-Z]/, "Deve conter uma letra maiúscula!")
    .matches(/([a-z])/, "Deve conter uma miniscula!")
    .matches(/(\d)/, "Deve conter um número!")
    .matches(/(\W)/, "Deve conter um caracter especial!")
    .required("Senha obrigatória!"),
  confirm: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha!"
    ),
  bio: yup.string().required("Bio é obrigatória!"),
  contact: yup.string().required("Contato é obrigatório!"),
  course_module: yup.string().required("Módulo é obrigatório!"),
});

const Register = ({ back }) => {
  const { registerUser } = useContext(AuthContext);

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
        <ButtonDefault onClick={() => back()}>Voltar</ButtonDefault>
      </DivHeader>
      <DivForm>
        <FormHeader>
          <h1>Crie sua conta</h1>
          <p>Rápido e grátis, vamos nessa</p>
        </FormHeader>
        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

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
          <label htmlFor="confirm">Confirmar Senha</label>
          <input
            type="password"
            id="confirm"
            placeholder="Digite novamente sua senha"
            {...register("confirm")}
          />
          <p>{errors.confirm?.message}</p>
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <p>{errors.bio?.message}</p>
          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>
          <label htmlFor="course_module">Selecionar módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="Primeiro módulo">Primeiro Módulo</option>
            <option value="Segundo módulo">Segundo Módulo</option>
            <option value="Terceiro módulo">Terceiro Módulo</option>
            <option value="Quarto módulo">Quarto Módulo</option>
            <option value="Quinto módulo">Quinto Módulo</option>
            <option value="Sexto módulo">Sexto Módulo</option>
          </select>
          <p>{errors.course_module?.message}</p>
          <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        </form>
      </DivForm>
    </ContainerForm>
  );
};

export default Register;
