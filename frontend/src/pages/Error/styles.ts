import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  margin: 0;
  flex-direction: column;

  button {
    top: 60%;
    height: 3rem;
    position: relative;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 20px;
    background-color: #1a7ae0;
    color: white;
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;
    border-radius: 5px;
    border: none;
    padding: 0.5rem 2rem 0.5rem 2rem;
    transition: all 0.5s;
    width: 25rem;
    cursor: pointer;
  }

  img {
    position: absolute;
  }

  button:hover {
    background: #1a5ae0;
  }

  div {
    display: flex;
    position: relative;
    top: 17rem;
    right: 12rem;
    flex-direction: column;
    z-index: 2;
    color: #393939;

    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 70px;
      line-height: 5px;
    }

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
    }
  }
`;
