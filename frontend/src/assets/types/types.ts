export type User = {
  email: string;
  password: string;
};

export type RegisterInternProps = {
  first_name: string;
  last_name: string;
  RA: number;
  email: string;
  phone: string;
  company_name: string;
  job_description: string;
  internship_avaliation: string;
};

export type EditInternProps = RegisterInternProps & {
  status: string;
  internship_checklist: string;
};

export type InternProps = EditInternProps;

export type EditAdminProps = {
  name: string;
  password: string;
  email: string;
  phone: string;
};
