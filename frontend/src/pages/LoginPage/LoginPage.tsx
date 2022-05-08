import Banner from "../../assets/img/Banner.svg";
import Logo from "../../assets/img/Logo.svg";

import { FiAtSign } from "react-icons/fi";
import { AiFillLock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  BannerSection,
  ButtonSubmit,
  Container,
  ErrorMessage,
  InputLogin,
  InputPass,
  LoginSection,
  SignInSection,
  TitleSection,
} from "./styles";
import { validateLoginAndPassword } from "../../assets/schemas";
import { User } from "../../assets/types";
import { AdminUser } from "../../assets/data";

export const LoginPage = () => {
  const [visible, setVisible] = useState(true);

  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(validateLoginAndPassword),
  });

  const toggleVisible = () => setVisible(!visible);

  const onSubmit = (data: User) => {
    if (
      data.email !== AdminUser.email ||
      data.password !== AdminUser.password
    ) {
      return setError(true);
    }
    setError(false);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    console.log(data);
  };

  return (
    <Container>
      <LoginSection onSubmit={handleSubmit(onSubmit)}>
        <TitleSection>
          <h1>
            <img src={Logo} alt="logo" />
            <span>Internship Manager</span>
          </h1>
        </TitleSection>
        <SignInSection>
          <h1>Sign In</h1>
          <p>Your account</p>
        </SignInSection>
        <InputLogin>
          <FiAtSign />
          <input
            placeholder="E-mail"
            type="text"
            {...register("email")}
            autoComplete="off"
          />
        </InputLogin>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <InputPass>
          <AiFillLock className="lock" />
          <input
            placeholder="Password"
            type={visible ? "password" : "text"}
            {...register("password")}
          />
          <span className="eye" onClick={toggleVisible}>
            {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </InputPass>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <ButtonSubmit type="submit">Sign in</ButtonSubmit>
        <ErrorMessage>{error && "Login or password do not match"}</ErrorMessage>
      </LoginSection>
      <BannerSection>
        <img src={Banner} alt="Banner" />
      </BannerSection>
    </Container>
  );
};
