import {
  AdminInfosContainer,
  Container,
  FormAdmin,
  InputContainer,
  InputsContainer,
  Title,
} from "./styles";
import { Fade } from "react-reveal";
import AdminLogo from "../../assets/img/AdminLogo.png";
import { ErrorMessage } from "../../pages/Login/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditAdminProps } from "../../assets/types";
import { validateEditAdmin } from "../../assets/schemas";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const AdminArea = () => {
  const [dataAdmin, setDataAdmin] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("coordinator")
      .then((response) => {
        setDataAdmin(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditAdminProps>({
    resolver: yupResolver(validateEditAdmin),
  });

  const SubmitNewAdminInfos = (data: EditAdminProps) => {
    api.put("update-coordinator/1", data);
    navigate("/dashboard");
  };

  return (
    <Container>
      <Fade top>
        <Title>EDIT ADMIN INFORMATION</Title>
      </Fade>
      <AdminInfosContainer>
        <Fade bottom>
          <img src={AdminLogo} alt="Admin" />
          <FormAdmin onSubmit={handleSubmit(SubmitNewAdminInfos)}>
            <InputsContainer>
              <InputContainer>
                <p>Name</p>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("name")}
                  defaultValue={dataAdmin.name}
                />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </InputContainer>
              <InputContainer>
                <p>Password</p>
                <input
                  type="password"
                  autoComplete="off"
                  {...register("password")}
                  defaultValue={dataAdmin.password}
                />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </InputContainer>
            </InputsContainer>
            <InputsContainer>
              <InputContainer>
                <p>Email</p>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("email")}
                  defaultValue={dataAdmin.email}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </InputContainer>
              <InputContainer>
                <p>Phone</p>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("phone")}
                  defaultValue={dataAdmin.phone}
                />
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
              </InputContainer>
            </InputsContainer>
            <button>Save</button>
          </FormAdmin>
        </Fade>
      </AdminInfosContainer>
    </Container>
  );
};
