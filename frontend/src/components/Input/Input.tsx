import { InputProps } from "../../assets/types";
import { InputContainer } from "./styles";



export const Input = ({ label, type }: InputProps) => {
  return (
    <InputContainer>
      <p>{label}</p>
      <input type={type} required/>
      erro
    </InputContainer>
  );
};
