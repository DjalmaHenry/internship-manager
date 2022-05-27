import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
`;

export const Content = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 60rem;
  height: 30rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4c4c4c;
    border-radius: 10px;
    margin-left: 2rem;
  }

  h1 {
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #4c4c4c;
  }
`;

export const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #b3b3b3;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  input {
    font-family: "Manrope", sans-serif;
    width: 7rem;
    height: 1rem;
    background: #fafafa;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    padding: 0.5rem 3rem 0.5rem 3rem;
    ::placeholder {
      font-size: 16px;
      font-weight: 400;
    }
  }

  input:focus {
    outline: 0;
  }

  svg {
    position: relative;
    left: 7.5rem;
    font-size: 25px;
    color: #4c4c4c;
    z-index: 0;
  }

  button {
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

export const Table = styled.table`
  text-align: left;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: "Manrope", sans-serif;
  tr {
    th {
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #4c4c4c;
      padding: 1rem;
      background-color: #f2f2f2;
    }

    th:first-child {
      border-radius: 5px 0px 0px 0px;
    }

    th:last-child {
      border-radius: 0px 5px 0px 0px;
    }

    td {
      color: #808080;
      border-bottom: 1px solid #f2f2f2;
      padding: 1rem;
      font-weight: 600;
      font-size: 15px;
      line-height: 16px;
      max-width: 8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      svg {
        cursor: pointer;
        color: ${(props) => (props.color ? props.color : "#1a7ae0")};
        margin: 10px;
        font-size: 20px;
        transition: all 0.25s;
      }
      svg:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }
`;

export const StatusVerified = styled.p`
  width: 5rem;
  text-align: center;
  background-color: #deede5;
  color: #427a5b;
  border-radius: 5px;
  padding: 0.2rem;
`;

export const StatusPending = styled.p`
  width: 5rem;
  text-align: center;
  background-color: #fdf8ce;
  color: #938406;
  border-radius: 5px;
  padding: 0.2rem;
`;
