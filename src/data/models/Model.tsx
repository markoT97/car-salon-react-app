export type Model = {
  modelId: number;
  brandId: number;
  engineId: number;
  equipmentId: number;
  brandName: string;
  engineName: string;
  name: string;
  numberOfDoors: number;
  numberOfSeats: number;
  gearboxType: string;
  sideOfSteeringWheel: string;
  price: number;
  currency: string;
};

export const defaultModel: Model = {
  modelId: 0,
  brandId: 0,
  engineId: 0,
  equipmentId: 0,
  brandName: "",
  engineName: "",
  name: "",
  numberOfDoors: 0,
  numberOfSeats: 0,
  gearboxType: "",
  sideOfSteeringWheel: "",
  price: 0,
  currency: "",
};
