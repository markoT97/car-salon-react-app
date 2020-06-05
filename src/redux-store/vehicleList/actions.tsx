import { FETCH_VEHICLE_MODELS, SELECT_VEHICLE_MODEL } from "./types";
import { VehicleModel } from "../../data/models/VehicleModel";
import { getAll } from "../../data/services/vehicleModelService";

export function fetchVehicleModels() {
  return async (dispatch: any) => {
    const { data } = await getAll();

    if (data) {
      dispatch(selectVehicleModel(data[0]));
    }
    return dispatch({ type: FETCH_VEHICLE_MODELS, payload: data });
  };
}

export function selectVehicleModel(vehicleModel: VehicleModel) {
  return { type: SELECT_VEHICLE_MODEL, payload: vehicleModel };
}
