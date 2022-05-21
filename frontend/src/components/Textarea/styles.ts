import styled from "styled-components";

export const TextareaContainer = styled.div`
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
