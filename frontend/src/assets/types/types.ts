export type User = {
  email: string;
  password: string;
};

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

export type EditInternProps = RegisterInternProps;
