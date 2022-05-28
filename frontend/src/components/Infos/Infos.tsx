import { Container, TextWelcome, UserInfos } from "./styles";
import AdminLogo from "../../assets/img/AdminLogo.png";
import { Fade } from "react-reveal";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { EditAdminProps } from "../../assets/types";

export const Infos = () => {
  const [dataAdmin, setDataAdmin] = useState<EditAdminProps>();

  useEffect(() => {
    api
      .get("coordinator")
      .then((response) => {
        setDataAdmin(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Fade top>
        <TextWelcome>Welcome to dashboard</TextWelcome>
        <UserInfos>
          <img src={AdminLogo} alt="Admin Logo" />
          <div>
            <h1>{dataAdmin?.name}</h1>
            <p>Admin</p>
          </div>
        </UserInfos>
      </Fade>
    </Container>
  );
};
