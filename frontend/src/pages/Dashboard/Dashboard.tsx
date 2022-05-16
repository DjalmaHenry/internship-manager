import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Infos } from "../../components/Infos";
import { Sidebar } from "../../components/Sidebar";
import { TableArea } from "../../components/TableArea";
import { Container, ContainerDashboard } from "./styles";

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container>
      <Sidebar />
      <ContainerDashboard>
        <Infos />
        <TableArea />
      </ContainerDashboard>
    </Container>
  );
};
