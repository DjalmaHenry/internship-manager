import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const TextWelcome = styled.h1`
  font-family: "Manrope", sans-serif;
  color: #4c4c4c;
  font-weight: 600;
  font-size: 20px;
  margin-left: 5rem;
`;

export const UserInfos = styled.div`
  display: flex;
  line-height: 2px;
  margin-right: 5rem;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;

    h1 {
      font-family: "Manrope", sans-serif;
      color: #4c4c4c;
      font-weight: 600;
      font-size: 15px;
    }

    p {
      font-family: "Manrope", sans-serif;
      color: #b3b3b3;
      font-weight: 600;
      font-size: 13px;
    }
  }
`;
