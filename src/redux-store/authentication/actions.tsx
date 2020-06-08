import {
  FETCH_CURRENT_USER,
  FETCH_USER_SELLING_INFO,
  FETCH_CARS_SOLD_BY_USER,
} from "./types";
import { get as getUser } from "../../data/services/userService";
import { getAll as getUserSignedContracts } from "../../data/services/userSignedContractService";
import { getAll as getVehicles } from "../../data/services/vehicleModelService";

export function fetchCurrentUser(userId: number) {
  return async (dispatch: any) => {
    const { data } = await getUser(userId);

    return dispatch({ type: FETCH_CURRENT_USER, payload: data });
  };
}

export function fetchUserSellingInfo(userId: number) {
  return async (dispatch: any) => {
    const { data: userContracts } = await getUserSignedContracts(userId);
    return dispatch({ type: FETCH_USER_SELLING_INFO, payload: userContracts });
  };
}

export function fetchCarsSoldByUser(userId: number) {
  return async (dispatch: any) => {
    const { data: soldCars } = await getVehicles(...Array(4), userId);

    return dispatch({ type: FETCH_CARS_SOLD_BY_USER, payload: soldCars });
  };
}
