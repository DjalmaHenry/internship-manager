import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  color: #4c4c4c;
`;

export const AdminInfosContainer = styled.h1`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
  }
`;

export const FormAdmin = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 30px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    background-color: #1a7ae0;
    color: white;
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;
    border-radius: 5px;
    border: none;
    padding: 0.5rem 2rem 0.5rem 2rem;
    transition: all 0.5s;
    cursor: pointer;
  }

  button:hover {
    background: #1a5ae0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin: 10px 0px 10px 15px;
    line-height: 16px;
  }

  input {
    margin: 15px;
    background: #fafafa;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 10px 30px 10px 10px;
    transition: all 0.3s;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input:focus {
    outline: 1px solid #1a7ae0;
  }
`;

export const InputsContainer = styled.form`
  display: flex;
`;
