import { Vehicle } from "../../data/models/Vehicle";

export interface VehicleListState {
  vehicles: Array<Vehicle>;
  selectedVehicle: Vehicle;
}

export const FETCH_VEHICLES = "FETCH_VEHICLES";
export const SELECT_VEHICLE = "SELECT_VEHICLE";
export const PURCHASE_VEHICLE = "PURCHASE_VEHICLE";

interface FetchVehiclesAction {
  type: typeof FETCH_VEHICLES;
  payload: Array<Vehicle>;
}

interface SelectVehicleAction {
  type: typeof SELECT_VEHICLE;
  payload: Vehicle;
}

interface PurchaseVehicleAction {
  type: typeof PURCHASE_VEHICLE;
  payload: number;
}

export type VehicleListActionTypes =
  | FetchVehiclesAction
  | SelectVehicleAction
  | PurchaseVehicleAction;
