import { FETCH_VEHICLES, SELECT_VEHICLE } from "./types";
import { Vehicle } from "../../data/models/Vehicle";
import { getAll as getCars } from "../../data/services/vehicleService";
import { getAll as getImages } from "../../data/services/imageService";
import { defaultImage } from "./../../data/models/Image";

export function fetchVehicles(
  brandId?: number,
  modelId?: number,
  engineId?: number,
  supplierId?: number
) {
  return async (dispatch: any) => {
    const { data } = await getCars(brandId, modelId, engineId, supplierId);

    if (data.length > 0) {
      dispatch(selectVehicle(data[0]));
    }
    return dispatch({ type: FETCH_VEHICLES, payload: data });
  };
}

export function selectVehicle(vehicle: Vehicle) {
  return async (dispatch: any) => {
    const { data } = await getImages(vehicle.modelId);

    return dispatch({
      type: SELECT_VEHICLE,
      payload: {
        ...vehicle,
        image: data.length > 0 ? data[0] : defaultImage,
      },
    });
  };
}
