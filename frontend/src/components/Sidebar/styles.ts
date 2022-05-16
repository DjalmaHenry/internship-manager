import styled from "styled-components";

export const Container = styled.div`
  width: 15vw;
  height: 100%;
  background-color: #e5e5e5;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  bottom: 10rem;

  h1 {
    color: #393939;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin-top: 30px;
    line-height: 22px;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Button = styled.button`
  margin-top: 1.8rem;
  padding: 10px 15px;
  width: 10rem;
  justify-content: left;
  align-items: center;
  display: flex;
  color: ${(props) => (props.color ? props.color : "#4c4c4c")};
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  border: none;
  background-color: transparent;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 16px;

  :hover,
  :active,
  :focus {
    background-color: #92c0fa;
    border-radius: 5px;
  }

  svg {
    font-size: 25px;
    margin-right: 10px;
  }
`;
