import { Image } from "./Image";

export type Vehicle = {
  carId: number;
  chassisNumber: string;
  yearOfProduction: number;
  brandId: number;
  brandName: string;
  modelId: number;
  modelName: string;
  gearboxType: string;
  numberOfDoors: number;
  numberOfSeats: number;
  sideOfSteeringWheel: string;
  price: number;
  currency: string;
  engineId: number;
  engineName: string;
  engineType: string;
  enginePowerKW: number;
  equipmentId: number;
  color: string;
  hasABS: boolean;
  hasAirConditioning: boolean;
  supplierId: number;
  supplierName: string;
  image: Image;
};
