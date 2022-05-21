import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { validateRegisterIntern } from "../../assets/schemas";
import { RegisterInternProps } from "../../assets/types";
import { Input } from "../Input/Input";
import { TextArea } from "../Textarea/Textarea";
import {
  BackgroundModal,
  HeaderModal,
  ContainerModal,
  InputsContainer,
  TextareaContainer,
  ButtonSubmit,
} from "./styles";

type ModalProps = {
  setOpenModal: (setOpenModal: boolean) => void;
};

function Modal({ setOpenModal }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInternProps>({
    resolver: yupResolver(validateRegisterIntern),
  });

  return (
    <BackgroundModal>
      <ContainerModal>
        <HeaderModal>
          <h1>CREATE INTERN</h1>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <IoMdClose />
          </button>
        </HeaderModal>
        <InputsContainer>
          <Input label="First name" type="text" />
          <Input label="Last name" type="text" />
          <Input label="RA" type="text" />
        </InputsContainer>
        <InputsContainer>
          <Input label="Email" type="text" />
          <Input label="Phone" type="text" />
          <Input label="Contracting Company" type="text" />
        </InputsContainer>
        <TextareaContainer>
          <TextArea label="Job Description" />
          <TextArea label="Internship Activities (separate with commas)" />
        </TextareaContainer>
        <ButtonSubmit>Register intern</ButtonSubmit>
      </ContainerModal>
    </BackgroundModal>
  );
}

export default Modal;
