import {
  FETCH_VEHICLES,
  SELECT_VEHICLE,
  VehicleListActionTypes,
} from "./types";
import { VehicleListState } from "./types";

const initialState: VehicleListState = {
  vehicles: [],
  selectedVehicle: {
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
    image: {
      imageId: 0,
      modelId: 0,
      name: "",
      extension: "",
      path: "",
    },
  },
};

function vehicleListReducer(
  state = initialState,
  action: VehicleListActionTypes
): VehicleListState {
  switch (action.type) {
    case FETCH_VEHICLES:
      return { ...state, vehicles: action.payload };
    case SELECT_VEHICLE:
      return { ...state, selectedVehicle: action.payload };
    default:
      return state;
  }
}

export default vehicleListReducer;
