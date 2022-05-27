import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Infos, Sidebar } from "../../components";
import { DetailArea } from "../../components/DetailArea/DetailArea";
import { Container, ContainerEditArea } from "./styles";

export const Detail = () => {
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
        <DetailArea />
      </ContainerEditArea>
    </Container>
  );
};