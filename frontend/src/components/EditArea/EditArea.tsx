import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { validateEditIntern } from "../../assets/schemas";
import { EditInternProps } from "../../assets/types";
import { ErrorMessage } from "../../pages/Login/styles";
import { api } from "../../services/api";
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
  const { ra } = useParams();
  const navigate = useNavigate();

  const [internData, setInternData] = useState<any>([]);

  useEffect(() => {
    api
      .get(`contract/${ra}`)
      .then((response) => setInternData(response.data))
      .catch((error) => console.log(error));
  }, [ra]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditInternProps>({
    resolver: yupResolver(validateEditIntern),
  });

  const SubmitEditIntern = (data: EditInternProps) => {
    api
      .put(`update-intern/${ra}`, data)
      .then((response) => {
        if (response.status === 200) {
          navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <ContainerModal onSubmit={handleSubmit(SubmitEditIntern)}>
        <HeaderModal>
          <h1>EDIT INTERN</h1>
        </HeaderModal>
        <InputsContainer>
          <InputContainer>
            <p>First name</p>
            <input
              type="text"
              {...register("first_name")}
              autoComplete="off"
              defaultValue={internData.first_name}
            />
            <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>Last name</p>
            <input
              type="text"
              {...register("last_name")}
              autoComplete="off"
              defaultValue={internData.last_name}
            />
            <ErrorMessage>{errors.last_name?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>RA</p>
            <input
              type="number"
              {...register("RA")}
              autoComplete="off"
              readOnly
              defaultValue={internData.RA}
            />
          </InputContainer>
        </InputsContainer>
        <InputsContainer>
          <InputContainer>
            <p>Email</p>
            <input
              type="text"
              {...register("email")}
              defaultValue={internData.email}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>Phone</p>
            <input
              type="text"
              {...register("phone")}
              autoComplete="off"
              defaultValue={internData.phone}
            />
            <ErrorMessage>{errors.phone?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>Contracting Company</p>
            <input
              type="text"
              {...register("company_name")}
              autoComplete="off"
              defaultValue={internData.company_name}
            />
            <ErrorMessage>{errors.company_name?.message}</ErrorMessage>
          </InputContainer>
        </InputsContainer>
        <InputsContainer>
          <InputContainer>
            <p>Contract Status</p>
            <select {...register("status")} defaultValue={internData.status}>
              <option value="Pending">Pending</option>
              <option value="Verified">Verified</option>
            </select>
            <ErrorMessage>{errors.status?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <p>Report Status</p>
            <select
              {...register("internship_checklist")}
              defaultValue={internData.internship_checklist}
            >
              <option value="Pending">Pending</option>
              <option value="Verified">Verified</option>
            </select>
            <ErrorMessage>{errors.internship_checklist?.message}</ErrorMessage>
          </InputContainer>
        </InputsContainer>
        <TextareaContainer>
          <TextareaBox>
            <p>Job Description</p>
            <textarea
              rows={10}
              {...register("job_description")}
              defaultValue={internData.job_description}
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
              defaultValue={internData.internship_avaliation}
            />
            <ErrorMessage>{errors.internship_avaliation?.message}</ErrorMessage>
          </TextareaBox>
        </TextareaContainer>
        <ButtonSubmit>Edit intern</ButtonSubmit>
    </ContainerModal>
  );
};
