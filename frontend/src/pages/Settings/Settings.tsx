import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminArea, Infos } from "../../components";

import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Container, ContainerEditArea } from "./styles";

export const Settings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container>
      <Sidebar />
      <ContainerEditArea>
        <Infos />
        <AdminArea />
      </ContainerEditArea>
    </Container>
  );
};
