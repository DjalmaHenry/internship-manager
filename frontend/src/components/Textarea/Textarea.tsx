import { TextAreaProps } from "../../assets/types";
import { TextareaContainer } from "./styles";

export const TextArea = ({ label }: TextAreaProps) => {
  return (
    <TextareaContainer>
      <p>{label}</p>
      <textarea rows={10} />
      erro
    </TextareaContainer>
  );
};
