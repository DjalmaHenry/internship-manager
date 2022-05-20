import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 87vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ContainerModal = styled.div`
  width: 50%;
  height: 60%;
  border-radius: 12px;
  background-color: white;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
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
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
`;