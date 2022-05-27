import styled from "styled-components";
import Intern from "../../assets/img/Intern.svg";

export const CardContainer = styled.div`
  width: 20vw;
  height: 60vh;
  background-color: #eeeeee;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardDetail = styled.div`
  width: 10vw;
  height: 2vh;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

export const PhotoContainer = styled.div`
  background-image: url(${Intern});
  background-position: center;
  background-repeat: no-repeat;
  width: 10vw;
  height: 10vw;
  background-color: white;
  border-radius: 20px;
`;

export const InfosContainer = styled.div`
  width: 90%;
  height: 50%;
  color: #4c4c4c;
  font-family: "Montserrat";
  div {
    margin-top: 30px;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 10px;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 10px;
    }
  }
`;
