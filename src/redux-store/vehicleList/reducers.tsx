import {
  FETCH_VEHICLE_MODELS,
  SELECT_VEHICLE_MODEL,
  VehicleListActionTypes,
} from "./types";
import { VehicleListState } from "./types";

const initialState: VehicleListState = {
  vehicleModels: [],
  selectedModel: {
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
    image: "",
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
