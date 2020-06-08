export type User = {
  userId: number;
  role: string;
  JMBG: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  imagePath: string;
  password: string;
};

export const defaultUser: User = {
  userId: 0,
  role: "",
  JMBG: "",
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  imagePath: "",
  password: "",
};
