import { InternCard } from "../InternCard/InternCard";
import { StatusPending, StatusVerified } from "../TableArea/styles";
import { Container, InfosContainer, Title } from "./styles";

export const DetailArea = () => {
  const reportStatus = "Pending";
  const reportStatus1 = "Verified";

  return (
    <Container>
      <InternCard />
      <InfosContainer>
        <div>
          <Title>Contract Status</Title>
          {reportStatus === "Pending" ? (
            <StatusPending>{reportStatus}</StatusPending>
          ) : (
            <StatusVerified>{reportStatus}</StatusVerified>
          )}
        </div>
        <div>
          <Title>Email</Title>
          <h1>davimateusga@gmail.com</h1>
        </div>
        <div>
          <Title>Job Description</Title>
          <h1>
            Full Stack web developer Desired knowledge in programming languages:
            React Node.Js MySQL
          </h1>
        </div>
      </InfosContainer>
      <InfosContainer>
        <div>
          <Title>Report Status</Title>
          {reportStatus1 === "Verified" ? (
            <StatusVerified>{reportStatus1}</StatusVerified>
          ) : (
            <StatusPending>{reportStatus1}</StatusPending>
          )}
        </div>
        <div>
          <Title>Phone</Title>
          <h1>87 98847 6864</h1>
        </div>
        <div>
          <Title>Internship Activities</Title>
          <h1>
            Develop full flow web applications support bugs support design
          </h1>
        </div>
      </InfosContainer>
    </Container>
  );
};
