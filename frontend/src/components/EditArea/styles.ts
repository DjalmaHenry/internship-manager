import styled from "styled-components";

export const ContainerModal = styled.form`
  width: 70%;
  height: 70%;
  border-radius: 12px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.35);
  flex-direction: column;
  padding: 50px;
  overflow-y: auto;
  margin-bottom: 50px;

  ::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4c4c4c;
    border-radius: 10px;
    margin-left: 2rem;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  color: #393939;

  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;

    svg {
      transition: all 0.5s;
      font-size: 40px;
    }

    svg:hover {
      color: red;
    }
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextareaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonSubmit = styled.button`
  background: #1a7ae0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 10px 30px 10px 10px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  color: white;
`;

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

  select {
    background: #fafafa;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    width: 20rem;
    padding: 10px 30px 10px 10px;
    transition: all 0.3s;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[readonly] {
    cursor: not-allowed;
  }

  input[readonly]:focus {
    outline: none;
  }

  input:focus,
  select:focus {
    outline: 1px solid #1a7ae0;
  }
`;

export const TextareaBox = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
  }

  textarea {
    font-family: "Montserrat", sans-serif;
    background: #fafafa;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    transition: all 0.3s;
    resize: none;
    width: 20rem;
  }

  textarea:focus {
    outline: 1px solid #1a7ae0;
  }
`;
