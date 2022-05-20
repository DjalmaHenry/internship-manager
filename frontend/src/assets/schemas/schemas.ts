import * as yup from "yup";

export const validateLoginAndPassword = yup.object().shape({
  email: yup.string().email("This email format is not correct").required("Incorrect email"),
  password: yup.string().required("Incorrect password"),
});


export const validateRegisterIntern= yup.object().shape({
  email: yup.string().email("This email format is not correct").required("Incorrect email"),
  password: yup.string().required("Incorrect password"),
});