import { FETCH_VEHICLES, SELECT_VEHICLE, PURCHASE_VEHICLE } from "./types";
import { Vehicle } from "../../data/models/Vehicle";
import { getAll as getCars } from "../../data/services/vehicleService";
import { getAll as getImages } from "../../data/services/imageService";
import { defaultImage } from "./../../data/models/Image";
import { put } from "../../data/services/vehicleService";
import {
  postNaturalPerson,
  postCustomer,
  postLegalEntity,
} from "../../data/services/customerService";
import { NaturalPerson } from "../../data/models/NaturalPerson";
import { Customer } from "../../data/models/Customer";
import { LegalEntity } from "../../data/models/LegalEntity";

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

export function purchaseVehicle(
  vehicle: Vehicle,
  customerType: any,
  formData: any
) {
  return async (dispatch: any) => {
    if (customerType === "naturalPerson") {
      const { data: newNaturalPerson } = await postNaturalPerson(
        formData as NaturalPerson
      );

      const customer = formData as Customer;
      customer.pib = undefined;

      const { data: newCustomer } = await postCustomer(customer);
      vehicle.customerId = newCustomer.customerId;

      await put(vehicle);
    } else {
      const { data: newLegalEntity } = await postLegalEntity(
        formData as LegalEntity
      );

      const customer = formData as Customer;
      customer.jmbg = undefined;

      const { data: newCustomer } = await postCustomer(customer);
      vehicle.customerId = newCustomer.customerId;

      await put(vehicle);
    }

    return dispatch({
      type: PURCHASE_VEHICLE,
      payload: vehicle.carId,
    });
  };
}
