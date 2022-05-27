import { Button, ButtonsArea, Container, LogoArea } from "./styles";

import { MdOutlineDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

import Logo from "../../assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <Container>
      <LogoArea>
        <img src={Logo} alt="logo" />
        <h1>Internship Manager</h1>
      </LogoArea>
      <ButtonsArea>
        <Button onClick={() => navigate("/dashboard")}>
          <MdOutlineDashboard />
          Dashboard
        </Button>
        <Button onClick={() => navigate("/settings")}>
          <IoSettingsOutline />
          Settings
        </Button>
        <Button color="#A65959" onClick={handleLogout}>
          <IoMdLogOut />
          Logout
        </Button>
      </ButtonsArea>
    </Container>
  );
};
