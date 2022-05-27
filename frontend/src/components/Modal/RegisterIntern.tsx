import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { validateRegisterIntern } from "../../assets/schemas";
import { RegisterInternProps } from "../../assets/types";
import { ErrorMessage } from "../../pages/Login/styles";

import {
  BackgroundModal,
  HeaderModal,
  ContainerModal,
  InputsContainer,
  TextareaContainer,
  ButtonSubmit,
  InputContainer,
  TextareaBox,
} from "./styles";

type ModalProps = {
  setOpenModal: (setOpenModal: boolean) => void;
};

const RegisterIntern = ({ setOpenModal }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInternProps>({
    resolver: yupResolver(validateRegisterIntern),
  });

  const SubmitNewIntern = (data: RegisterInternProps) => {
    console.log(data);
    setOpenModal(false);
  };

  return (
    <BackgroundModal>
      <ContainerModal onSubmit={handleSubmit(SubmitNewIntern)}>
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
          <InputContainer>
            <p>First name</p>
            <input type="text" {...register("firstName")} autoComplete="off" />
            <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>Last name</p>
            <input type="text" {...register("lastName")} autoComplete="off" />
            <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>RA</p>
            <input type="text" {...register("ra")} autoComplete="off" />
            <ErrorMessage>{errors.ra?.message}</ErrorMessage>
          </InputContainer>
        </InputsContainer>
        <InputsContainer>
          <InputContainer>
            <p>Email</p>
            <input type="text" {...register("email")} />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>Phone</p>
            <input type="text" {...register("phone")} autoComplete="off" />
            <ErrorMessage>{errors.phone?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>Contracting Company</p>
            <input
              type="text"
              {...register("contractingCompany")}
              autoComplete="off"
            />
            <ErrorMessage>{errors.contractingCompany?.message}</ErrorMessage>
          </InputContainer>
        </InputsContainer>
        <TextareaContainer>
          <TextareaBox>
            <p>Job Description</p>
            <textarea
              rows={10}
              {...register("jobDescription")}
              autoComplete="off"
            />
            <ErrorMessage>{errors.jobDescription?.message}</ErrorMessage>
          </TextareaBox>
          <TextareaBox>
            <p>Internship Activities (separate with commas)</p>
            <textarea
              rows={10}
              {...register("internshipActivities")}
              autoComplete="off"
            />
            <ErrorMessage>{errors.internshipActivities?.message}</ErrorMessage>
          </TextareaBox>
        </TextareaContainer>
        <ButtonSubmit>Register intern</ButtonSubmit>
      </ContainerModal>
    </BackgroundModal>
  );
};

export default RegisterIntern;
