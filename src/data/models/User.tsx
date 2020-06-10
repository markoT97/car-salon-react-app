export type User = {
  userId: number;
  role: string;
  jmbg: string;
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
  jmbg: "",
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  imagePath: "",
  password: "",
};
