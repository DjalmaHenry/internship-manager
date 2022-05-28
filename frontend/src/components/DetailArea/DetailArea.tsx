import { useEffect, useState } from "react";
import { Zoom } from "react-reveal";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { InternCard } from "../InternCard/InternCard";
import { StatusPending, StatusVerified } from "../TableArea/styles";
import { Container, InfosContainer, Title } from "./styles";
import ReactLoading from "react-loading";

export const DetailArea = () => {
  const { ra } = useParams();

  const [intern, setDataIntern] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      api
        .get(`contract/${ra}`)
        .then((response) => {
          setDataIntern(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, [ra]);

  return (
    <Container>
      {loading ? (
        <div>
          <ReactLoading type="spin" color="#1a7ae0" height={100} width={100} />
        </div>
      ) : (
        <Zoom>
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
              {intern.internship_checklist === "Pending" ? (
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
        </Zoom>
      )}
    </Container>
  );
};
