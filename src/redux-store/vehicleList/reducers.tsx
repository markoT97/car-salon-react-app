import {
  FETCH_VEHICLES,
  SELECT_VEHICLE,
  VehicleListActionTypes,
} from "./types";
import { VehicleListState } from "./types";
import { defaultVehicle } from "./../../data/models/Vehicle";

const initialState: VehicleListState = {
  vehicles: [],
  selectedVehicle: defaultVehicle,
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
