import {
  CardContainer,
  CardDetail,
  InfosContainer,
  PhotoContainer,
} from "./styles";

type InternCardProps = {
  firstName: string;
  lastName: string;
  ra: number;
  company: string;
};

export const InternCard: React.FC<InternCardProps> = ({
  firstName,
  lastName,
  ra,
  company,
}) => {
  return (
    <CardContainer>
      <CardDetail />
      <PhotoContainer />
      <InfosContainer>
        <div>
          <p>First name</p>
          <h1>{firstName}</h1>
        </div>
        <div>
          <p>Last name</p>
          <h1>{lastName}</h1>
        </div>
        <div>
          <p>RA</p>
          <h1>{ra}</h1>
        </div>
        <div>
          <p>Company</p>
          <h1>{company}</h1>
        </div>
      </InfosContainer>
    </CardContainer>
  );
};
