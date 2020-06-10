export type UserSignedContract = {
  userId: number;
  numberOfBoughtCars: number;
  firstName: string;
  lastName: string;
};

export const defaultUserSignedContract: UserSignedContract = {
  userId: 0,
  numberOfBoughtCars: 0,
  firstName: "",
  lastName: "",
};
