import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Infos, Sidebar } from "../../components";
import { EditArea } from "../../components/EditArea/EditArea";
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
