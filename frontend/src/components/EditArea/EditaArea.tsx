import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validateEditIntern } from "../../assets/schemas";
import { EditInternProps } from "../../assets/types";
import { ErrorMessage } from "../../pages/Login/styles";
import {
  ButtonSubmit,
  ContainerModal,
  HeaderModal,
  InputContainer,
  InputsContainer,
  TextareaBox,
  TextareaContainer,
} from "./styles";

export const EditArea = () => {
  const initialValues = {
    firstName: "Davi",
    lastName: "Almeida",
    ra: "00000009960",
    email: "davi@gmail.com",
    phone: "87988476864",
    contractingCompany: "loomi",
    contractStatus: "",
    reportStatus: "",
    jobDescription: "blablablalbalbalbal",
    internshipActivities: "blablablablablalbalb",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditInternProps>({
    defaultValues: initialValues,
    resolver: yupResolver(validateEditIntern),
  });

  const SubmitEditIntern = (data: EditInternProps) => {
    console.log(data);
  };

  return (
    <ContainerModal onSubmit={handleSubmit(SubmitEditIntern)}>
      <HeaderModal>
        <h1>EDIT INTERN</h1>
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
          <input type="text" {...register("ra")} autoComplete="off" readOnly />
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
      <InputsContainer>
        <InputContainer>
          <p>Contract Status</p>
          <select {...register("contractStatus")}>
            <option value="" selected disabled hidden>
              Select an option
            </option>
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
          </select>
          <ErrorMessage>{errors.contractStatus?.message}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <p>Report Status</p>
          <select {...register("reportStatus")}>
            <option value="" selected disabled hidden>
              Select an option
            </option>
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
          </select>
          <ErrorMessage>{errors.reportStatus?.message}</ErrorMessage>
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
      <ButtonSubmit>Edit intern</ButtonSubmit>
    </ContainerModal>
  );
};
