import {
  CardContainer,
  CardDetail,
  InfosContainer,
  PhotoContainer,
} from "./styles";

export const InternCard = () => {
  return (
    <CardContainer>
      <CardDetail />
      <PhotoContainer />
      <InfosContainer>
        <div>
          <p>First name</p>
          <h1>Davi</h1>
        </div>
        <div>
          <p>Last name</p>
          <h1>Almeida</h1>
        </div>
        <div>
          <p>RA</p>
          <h1>00000009960</h1>
        </div>
        <div>
          <p>Company</p>
          <h1>Loomi</h1>
        </div>
      </InfosContainer>
    </CardContainer>
  );
};
