export type Contract = {
  contractId?: number;
  createdAt?: Date;
  paymentMethod: string;
};

export const defaultBrand: Contract = { contractId: 0, paymentMethod: "" };
