import {
  FETCH_CURRENT_USER,
  FETCH_USER_SELLING_INFO,
  FETCH_CARS_SOLD_BY_USER,
  AUTHENTICATE_USER,
  UNAUTHENTICATE_USER,
} from "./types";
import { authenticate } from "../../data/services/userService";
import { get as getUser } from "../../data/services/userService";
import { getAll as getUserSignedContracts } from "../../data/services/userSignedContractService";
import { getAll as getVehicles } from "../../data/services/vehicleService";
import { AuthenticationModel } from "../../data/models/AuthenticationModel";
import jwtDecode from "jwt-decode";
import { TokenModel } from "./../../data/models/TokenModel";
import { TOKEN_IN_LOCAL_STORAGE } from "./../../shared/constants";

export function authenticateUser(authenticationModel: AuthenticationModel) {
  return async (dispatch: any) => {
    const { data } = await authenticate(authenticationModel);
    localStorage.setItem(TOKEN_IN_LOCAL_STORAGE, data);

    const decodedToken = jwtDecode(data) as TokenModel;
    return dispatch({ type: AUTHENTICATE_USER, payload: decodedToken });
  };
}

export function unauthenticateUser() {
  localStorage.removeItem(TOKEN_IN_LOCAL_STORAGE);
  return { type: UNAUTHENTICATE_USER };
}

export function fetchCurrentUser(userId: number) {
  return async (dispatch: any) => {
    const { data } = await getUser(userId);

    return dispatch({ type: FETCH_CURRENT_USER, payload: data });
  };
}

export function fetchUserSellingInfo(userId: number) {
  return async (dispatch: any) => {
    const { data: userContracts } = await getUserSignedContracts(userId);
    return dispatch({
      type: FETCH_USER_SELLING_INFO,
      payload: userContracts,
    });
  };
}

export function fetchCarsSoldByUser(userId: number) {
  return async (dispatch: any) => {
    const { data: soldCars } = await getVehicles(...Array(4), userId);

    return dispatch({ type: FETCH_CARS_SOLD_BY_USER, payload: soldCars });
  };
}
