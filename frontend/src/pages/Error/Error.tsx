import { Container } from "./styles";
import BannerError from "../../assets/img/BannerError.svg";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Fade left>
        <div>
          <h1>ERROR 404</h1>
          <p>Page not found</p>
        </div>
        <img src={BannerError} alt="Banner Error" />
        <button onClick={() => navigate("/")}>Back to homepage</button>
      </Fade>
    </Container>
  );
};
