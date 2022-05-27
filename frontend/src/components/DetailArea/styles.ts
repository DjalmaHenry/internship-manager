import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const InfosContainer = styled.div`
  width: 20vw;
  height: 60vh;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  div {
    width: 100%;
    word-wrap: break-word;
    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #4c4c4c;
    }
  }
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 32px;
`;
