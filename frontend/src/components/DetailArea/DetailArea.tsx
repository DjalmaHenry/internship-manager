import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { InternCard } from "../InternCard/InternCard";
import { StatusPending, StatusVerified } from "../TableArea/styles";
import { Container, InfosContainer, Title } from "./styles";

export const DetailArea = () => {
  const { ra } = useParams();
  console.log(ra);

  const [intern, setDataIntern] = useState<any>([]);

  useEffect(() => {
    api
      .get(`contract/${ra}`)
      .then((response) => setDataIntern(response.data))
      .catch((error) => console.log(error));
  }, [ra]);

  return (
    <Container>
      <InternCard
        firstName={intern.first_name}
        lastName={intern.last_name}
        ra={intern.RA}
        company={intern.company_name}
      />
      <InfosContainer>
        <div>
          <Title>Contract Status</Title>
          {intern.status === "Pending" ? (
            <StatusPending>Pending</StatusPending>
          ) : (
            <StatusVerified>Verified</StatusVerified>
          )}
        </div>
        <div>
          <Title>Email</Title>
          <h1>{intern.email}</h1>
        </div>
        <div>
          <Title>Job Description</Title>
          <h1>{intern.job_description}</h1>
        </div>
      </InfosContainer>
      <InfosContainer>
        <div>
          <Title>Report Status</Title>
          {intern.internship_checklist === false ? (
            <StatusPending>Pending</StatusPending>
          ) : (
            <StatusVerified>Verified</StatusVerified>
          )}
        </div>
        <div>
          <Title>Phone</Title>
          <h1>{intern.phone}</h1>
        </div>
        <div>
          <Title>Internship Activities</Title>
          <h1>{intern.internship_avaliation}</h1>
        </div>
      </InfosContainer>
    </Container>
  );
};
