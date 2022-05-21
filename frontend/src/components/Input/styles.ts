import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
  }

  input {
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
