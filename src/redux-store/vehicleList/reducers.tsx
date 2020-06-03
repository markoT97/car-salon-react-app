import {
  FETCH_VEHICLE_MODELS,
  SELECT_VEHICLE_MODEL,
  VehicleListActionTypes,
} from "./types";
import { VehicleListState } from "./types";

const initialState: VehicleListState = {
  vehicleModels: [
    {
      carId: 1,
      chassisNumber: "1230",
      yearOfProduction: 2015,
      brandId: 1,
      brandName: "Audi",
      modelId: 1,
      modelName: "A6",
      gearboxType: "Manual",
      numberOfDoors: 4,
      numberOfSeats: 4,
      sideOfSteeringWheel: "Left",
      price: 10346.1,
      currency: "$",
      engineId: 1,
      engineName: "TDi",
      engineType: "Diesel",
      enginePowerKW: 128,
      equipmentId: 1,
      color: "Blue",
      hasABS: true,
      hasAirConditioning: true,
      supplierId: 1,
      supplierName: "Auto kuca Heureka",
      image: "http://carrental.themeinjection.com/theme/img/vehicle6.jpg",
    },
    {
      carId: 2,
      chassisNumber: "3456",
      yearOfProduction: 2006,
      brandId: 2,
      brandName: "Fiat",
      modelId: 1,
      modelName: "Punto",
      gearboxType: "Manual",
      numberOfDoors: 5,
      numberOfSeats: 4,
      sideOfSteeringWheel: "Left",
      price: 3346.34,
      currency: "$",
      engineId: 1,
      engineName: "TDi",
      engineType: "Diesel",
      enginePowerKW: 128,
      equipmentId: 1,
      color: "Silver",
      hasABS: true,
      hasAirConditioning: true,
      supplierId: 1,
      supplierName: "Auto kuca Heureka",
      image: "http://carrental.themeinjection.com/theme/img/vehicle5.jpg",
    },
  ],
  selectedModel: {
    carId: 1,
    chassisNumber: "1230",
    yearOfProduction: 2015,
    brandId: 1,
    brandName: "Audi",
    modelId: 1,
    modelName: "A6",
    gearboxType: "Manual",
    numberOfDoors: 4,
    numberOfSeats: 4,
    sideOfSteeringWheel: "Left",
    price: 10346.1,
    currency: "$",
    engineId: 1,
    engineName: "TDi",
    engineType: "Diesel",
    enginePowerKW: 128,
    equipmentId: 1,
    color: "Blue",
    hasABS: true,
    hasAirConditioning: true,
    supplierId: 1,
    supplierName: "Auto kuca Heureka",
    image: "http://carrental.themeinjection.com/theme/img/vehicle6.jpg",
  },
};

function vehicleListReducer(
  state = initialState,
  action: VehicleListActionTypes
): VehicleListState {
  switch (action.type) {
    case FETCH_VEHICLE_MODELS:
      return { ...state, vehicleModels: action.payload };
    case SELECT_VEHICLE_MODEL:
      return { ...state, selectedModel: action.payload };
    default:
      return state;
  }
}

export default vehicleListReducer;
