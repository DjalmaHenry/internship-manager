import { Container, TextWelcome, UserInfos } from "./styles";
import AdminLogo from "../../assets/img/AdminLogo.png";

export const Infos = () => {
  return (
    <Container>
      <TextWelcome>Welcome to dashboard</TextWelcome>
      <UserInfos>
        <img src={AdminLogo} alt="Admin Logo" />
        <div>
          <h1>Leuson Mario</h1>
          <p>Admin</p>
        </div>
      </UserInfos>
    </Container>
  );
};
