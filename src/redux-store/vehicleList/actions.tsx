import { FETCH_VEHICLE_MODELS, SELECT_VEHICLE_MODEL } from "./types";
import { VehicleModel } from "../../data/models/VehicleModel";
import { getAll as getCars } from "../../data/services/vehicleModelService";
import { getAll as getImages } from "../../data/services/imageService";
import { defaultCarImage } from "./../../shared/constants";

export function fetchVehicleModels() {
  return async (dispatch: any) => {
    const { data } = await getCars();

    if (data) {
      dispatch(selectVehicleModel(data[0]));
    }
    return dispatch({ type: FETCH_VEHICLE_MODELS, payload: data });
  };
}

export function selectVehicleModel(vehicleModel: VehicleModel) {
  return async (dispatch: any) => {
    const { data } = await getImages(vehicleModel.modelId);

    return dispatch({
      type: SELECT_VEHICLE_MODEL,
      payload: {
        ...vehicleModel,
        image: data.length > 0 ? data[0] : defaultCarImage,
      },
    });
  };
}
