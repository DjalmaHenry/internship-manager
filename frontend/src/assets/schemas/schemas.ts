import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const onlyNumbersRegExp = /^[0-9]/;

export const validateLoginAndPassword = yup.object().shape({
  email: yup
    .string()
    .email("This email format is not correct")
    .required("Incorrect email"),
  password: yup.string().required("Incorrect password"),
});

export const validateRegisterIntern = yup.object().shape({
  firstName: yup.string().required("Invalid name"),
  lastName: yup.string().required("Invalid lastname"),
  ra: yup
    .string()
    .matches(onlyNumbersRegExp, "RA is not valid")
    .required("RA is required")
    .max(11, "Max is 11 digits"),
  email: yup
    .string()
    .email("Email format incorrect")
    .required("Incorrect email"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone not valid")
    .required("Phone is required"),
  contractingCompany: yup.string().required("Invalid company"),
  jobDescription: yup.string().required("Invalid job description"),
  internshipActivities: yup.string().required("Invalid internship activities"),
});

export const validateEditIntern = yup.object().shape({
  first_name: yup.string().required("Invalid name"),
  last_name: yup.string().required("Invalid lastname"),
  email: yup
    .string()
    .email("Email format incorrect")
    .required("Incorrect email"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone not valid")
    .required("Phone is required"),
  company_name: yup.string().required("Invalid company"),
  status: yup.string().required("Select an valid option"),
  internship_checklist: yup.string().required("Select an valid option"),
  job_description: yup.string().required("Invalid job description"),
  internship_avaliation: yup.string().required("Invalid internship activities"),
});

export const validateEditAdmin = yup.object().shape({
  name: yup.string().required("Invalid name"),
  password: yup.string().required("Invalid password"),
  email: yup
    .string()
    .email("Email format incorrect")
    .required("Incorrect email"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone not valid")
    .required("Phone is required"),
});
