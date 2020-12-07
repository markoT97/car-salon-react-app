export type Equipment = {
  equipmentId: number;
  color: string;
  hasABS: boolean;
  hasAirConditioning: boolean;
};

export const defaultEngine: Equipment = {
  equipmentId: 0,
  color: "",
  hasABS: false,
  hasAirConditioning: false,
};
