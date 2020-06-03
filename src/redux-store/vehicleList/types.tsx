import { VehicleModel } from "../../data/models/VehicleModel";

export interface VehicleListState {
  vehicleModels: Array<VehicleModel>;
  selectedModel: VehicleModel;
}

export const FETCH_VEHICLE_MODELS = "FETCH_VEHICLE_MODELS";
export const SELECT_VEHICLE_MODEL = "SELECT_VEHICLE_MODEL";

interface FetchVehicleModelsAction {
  type: typeof FETCH_VEHICLE_MODELS;
  payload: Array<VehicleModel>;
}

interface SelectVehicleModelAction {
  type: typeof SELECT_VEHICLE_MODEL;
  payload: VehicleModel;
}

export type VehicleListActionTypes =
  | FetchVehicleModelsAction
  | SelectVehicleModelAction;
