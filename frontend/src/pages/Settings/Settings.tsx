import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Infos } from "../../components";
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
      </ContainerEditArea>
    </Container>
  );
};
