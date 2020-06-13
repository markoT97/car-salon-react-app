import {
  FETCH_CURRENT_USER,
  FETCH_USER_SELLING_INFO,
  FETCH_CARS_SOLD_BY_USER,
  AUTHENTICATE_USER,
  UNAUTHENTICATE_USER,
  FETCH_CARS_WITHOUT_CONTRACT,
  SIGN_CONTRACT_FOR_CAR,
} from "./types";
import { authenticate } from "../../data/services/userService";
import { get as getUser } from "../../data/services/userService";
import { getAll as getUserSignedContracts } from "../../data/services/userSignedContractService";
import { getAll as getVehicles } from "../../data/services/vehicleService";
import { AuthenticationModel } from "../../data/models/AuthenticationModel";
import jwtDecode from "jwt-decode";
import { TokenModel } from "./../../data/models/TokenModel";
import { TOKEN_IN_LOCAL_STORAGE } from "./../../shared/constants";
import { getAllWaitingContract } from "./../../data/services/vehicleService";
import { UserSignedContract } from "../../data/models/UserSignedContract";
import {
  postContract,
  postUserSignedContract,
} from "../../data/services/userSignedContractService";

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
      payload: userContracts[0],
    });
  };
}

export function fetchCarsSoldByUser(userId: number) {
  return async (dispatch: any) => {
    const { data: soldCars } = await getVehicles(...Array(4), userId);

    return dispatch({ type: FETCH_CARS_SOLD_BY_USER, payload: soldCars });
  };
}

export function fetchCarsWithoutContracts() {
  return async (dispatch: any) => {
    const { data } = await getAllWaitingContract();

    return dispatch({ type: FETCH_CARS_WITHOUT_CONTRACT, payload: data });
  };
}

export function selectCarsForSign(userSignedContract: UserSignedContract) {
  return async (dispatch: any) => {
    const { data: newContract } = await postContract({ paymentMethod: "Cash" });

    if (newContract) {
      userSignedContract.contractId = newContract.contractId;
      const { data: newUserSignedContract } = await postUserSignedContract(
        userSignedContract
      );

      return dispatch({
        type: SIGN_CONTRACT_FOR_CAR,
        payload: newUserSignedContract,
      });
    }
  };
}
