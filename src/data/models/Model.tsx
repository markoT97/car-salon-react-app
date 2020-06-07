export type Model = {
  modelId: number;
  brandId: number;
  engineId: number;
  equipmentId: number;
  name: string;
  numberOfDoors: number;
  numberOfSeats: number;
  gearboxType: string;
  sideOfSteeringWheel: string;
  price: number;
};

export const defaultModel: Model = {
  modelId: 0,
  brandId: 0,
  engineId: 0,
  equipmentId: 0,
  name: "",
  numberOfDoors: 0,
  numberOfSeats: 0,
  gearboxType: "",
  sideOfSteeringWheel: "",
  price: 0,
};
