export type Contract = {
  contractId?: number;
  createdAt?: Date;
  paymentMethod?: string;
  carId?: number;
  sellerId?: number;
};

export const defaultContract: Contract = { contractId: 0, paymentMethod: "" };
