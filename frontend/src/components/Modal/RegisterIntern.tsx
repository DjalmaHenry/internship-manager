import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { Fade } from "react-reveal";
import { validateRegisterIntern } from "../../assets/schemas";
import { RegisterInternProps } from "../../assets/types";
import { ErrorMessage } from "../../pages/Login/styles";
import { api } from "../../services/api";

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
    api
      .post("save-intern", data)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <BackgroundModal>
      <ContainerModal onSubmit={handleSubmit(SubmitNewIntern)}>
        <Fade top>
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
              <input
                type="text"
                {...register("first_name")}
                autoComplete="off"
              />
              <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
            </InputContainer>
            <InputContainer>
              <p>Last name</p>
              <input
                type="text"
                {...register("last_name")}
                autoComplete="off"
              />
              <ErrorMessage>{errors.last_name?.message}</ErrorMessage>
            </InputContainer>
            <InputContainer>
              <p>RA</p>
              <input type="text" {...register("RA")} autoComplete="off" />
              <ErrorMessage>{errors.RA?.message}</ErrorMessage>
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
                {...register("company_name")}
                autoComplete="off"
              />
              <ErrorMessage>{errors.company_name?.message}</ErrorMessage>
            </InputContainer>
          </InputsContainer>
          <TextareaContainer>
            <TextareaBox>
              <p>Job Description</p>
              <textarea
                rows={10}
                {...register("job_description")}
                autoComplete="off"
              />
              <ErrorMessage>{errors.job_description?.message}</ErrorMessage>
            </TextareaBox>
            <TextareaBox>
              <p>Internship Activities (separate with commas)</p>
              <textarea
                rows={10}
                {...register("internship_avaliation")}
                autoComplete="off"
              />
              <ErrorMessage>
                {errors.internship_avaliation?.message}
              </ErrorMessage>
            </TextareaBox>
          </TextareaContainer>
          <ButtonSubmit>Register intern</ButtonSubmit>
        </Fade>
      </ContainerModal>
    </BackgroundModal>
  );
};

export default RegisterIntern;
