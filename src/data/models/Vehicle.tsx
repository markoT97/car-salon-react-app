import { Image } from "./Image";
import { defaultImage } from "./Image";

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

export const defaultVehicle: Vehicle = {
  carId: 0,
  chassisNumber: "",
  yearOfProduction: 0,
  brandId: 0,
  brandName: "",
  modelId: 0,
  modelName: "",
  gearboxType: "",
  numberOfDoors: 0,
  numberOfSeats: 0,
  sideOfSteeringWheel: "",
  price: 0,
  currency: "",
  engineId: 0,
  engineName: "",
  engineType: "",
  enginePowerKW: 0,
  equipmentId: 0,
  color: "",
  hasABS: false,
  hasAirConditioning: false,
  supplierId: 0,
  supplierName: "",
  image: defaultImage,
};
