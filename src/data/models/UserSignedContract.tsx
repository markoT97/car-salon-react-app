export type UserSignedContract = {
  userId: number;
  numberOfSoldCars: number;
  totalEarnedMoney: number;
  currency: string;
  jmbg: string;
  firstName: string;
  lastName: string;
  carId: number;
  brandId: number;
  brandName: string;
  contractId: number;
  paymentMethod: string;
};

export const defaultUserSignedContract: UserSignedContract = {
  userId: 0,
  numberOfSoldCars: 0,
  totalEarnedMoney: 0,
  currency: "",
  jmbg: "",
  firstName: "",
  lastName: "",
  carId: 0,
  brandId: 0,
  brandName: "",
  contractId: 0,
  paymentMethod: "",
};
