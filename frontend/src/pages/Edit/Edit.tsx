import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EditArea } from "../../components/EditArea/EditaArea";
import { Infos } from "../../components/Infos";
import { Sidebar } from "../../components/Sidebar";
import { Container, ContainerEditArea } from "./styles";

export const Edit = () => {
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
        <EditArea />
      </ContainerEditArea>
    </Container>
  );
};