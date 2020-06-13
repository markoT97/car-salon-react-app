export type UserSignedContract = {
  carId: number;
  contractId?: number;
  userId: number;
  numberOfSignedContracts?: number;
  firstName?: string;
  lastName?: string;
};

export const defaultUserSignedContract: UserSignedContract = {
  carId: 0,
  contractId: 0,
  userId: 0,
  numberOfSignedContracts: 0,
  firstName: "",
  lastName: "",
};
