import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
`;

export const TitleSection = styled.div`
  margin-bottom: 5rem;
  h1 {
    display: flex;
    align-items: center;
    color: #393939;
    font-weight: 600;
    font-size: 2rem;
    img {
      margin-right: 1rem;
    }
  }
`;

export const SignInSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  width: 25rem;
  line-height: 1rem;
  flex-direction: column;
  color: #393939;
  h1 {
    font-weight: 600;
    font-size: 3rem;
  }
  p {
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const LoginSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 45%;
`;

export const InputLogin = styled.div`
  input {
    font-family: "Montserrat", sans-serif;
    width: 20rem;
    background: #f2f2f2;
    border-radius: 5px;
    border: 0.5px solid #e5e5e5;
    padding: 0.7rem 3rem 0.7rem 3rem;
    ::placeholder {
      font-size: 16px;
      font-weight: 400;
    }
  }

  input:focus {
    outline: 0;
  }

  svg {
    position: relative;
    left: 2rem;
    top: 0.5rem;
    font-size: 25px;
  }
`;

export const InputPass = styled.div`
  margin-top: 2rem;
  margin-left: 1.5rem;

  input {
    font-family: "Montserrat", sans-serif;
    width: 20rem;
    background: #f2f2f2;
    border-radius: 5px;
    border: 0.5px solid #e5e5e5;
    padding: 0.7rem 3rem 0.7rem 3rem;
    ::placeholder {
      font-size: 16px;
      font-weight: 400;
    }
  }

  input:focus {
    outline: 0;
  }

  & .lock {
    position: relative;
    left: 2rem;
    top: 0.5rem;
    font-size: 25px;
  }

  & .eye {
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: relative;
    right: 3rem;
    top: 0.5rem;
    font-size: 25px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 700;
  letter-spacing: 1px;
  height: 0.5rem;
  transition: all 0.5s;
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  font-weight: 700;
  color: white;
  font-size: 1rem;
  background: #1a7ae0;
  margin-left: 1.5rem;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  width: 26rem;
  margin-top: 2rem;
  transition: all 0.5s;

  :focus {
    outline: 0;
    border: none;
  }

  :hover {
    background: #1a5ae0;
  }
`;

export const BannerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  width: 55%;

  img {
    width: 85%;
  }
`;
