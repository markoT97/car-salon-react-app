import { User } from "../../data/models/User";
import { UserSignedContract } from "../../data/models/UserSignedContract";
import { Vehicle } from "../../data/models/Vehicle";

export interface AuthenticationState {
  currentUser: User;
  sellingInfo: UserSignedContract;
  soldCars: Array<Vehicle>;
}

export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const FETCH_USER_SELLING_INFO = "FETCH_USER_SELLING_INFO";
export const FETCH_CARS_SOLD_BY_USER = "FETCH_CARS_SOLD_BY_USER";

interface FetchCurrentUserAction {
  type: typeof FETCH_CURRENT_USER;
  payload: User;
}

interface FetchUserSellingInfoAction {
  type: typeof FETCH_USER_SELLING_INFO;
  payload: UserSignedContract;
}

interface FetchCarsSoldByUserAction {
  type: typeof FETCH_CARS_SOLD_BY_USER;
  payload: Array<Vehicle>;
}

export type AuthenticationActionTypes =
  | FetchCurrentUserAction
  | FetchUserSellingInfoAction
  | FetchCarsSoldByUserAction;
