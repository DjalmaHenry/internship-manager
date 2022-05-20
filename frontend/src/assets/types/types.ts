export type User = {
  email: string;
  password: string;
};

export type InputProps = {
  label: string;
  type: string;
};

export type TextAreaProps = Omit<InputProps, "type">;

export type RegisterInternProps = {
  firstName: string;
  lastName: string;
  ra: string;
  email: string;
  phone: string;
  contractingCompany: string;
  jobDescription: string;
  internshipActivities: string;
};
