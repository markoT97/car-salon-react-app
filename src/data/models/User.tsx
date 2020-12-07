export type User = {
  userId: number;
  role: string;
  jmbg?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  gender?: string | undefined;
  pib?: string | undefined;
  companyName?: string | undefined;
  email: string;
  address: string;
  imagePath?: string | undefined;
  password: string;
};

export const defaultUser: User = {
  userId: 0,
  role: "",
  jmbg: "",
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  address: "",
  imagePath: "",
  password: "",
};
