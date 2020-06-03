import { FETCH_VEHICLE_MODELS, SELECT_VEHICLE_MODEL } from "./types";
import { VehicleModel } from "../../data/models/VehicleModel";

const vehicleModels: Array<VehicleModel> = [];

export function fetchVehicleModels() {
  return { type: FETCH_VEHICLE_MODELS, payload: vehicleModels };
}

export function selectVehicleModel(vehicleModel: VehicleModel) {
  return { type: SELECT_VEHICLE_MODEL, payload: vehicleModel };
}
