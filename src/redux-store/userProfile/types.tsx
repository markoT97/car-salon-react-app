import { User } from "../../data/models/User";
import { UserSignedContract } from "../../data/models/UserSignedContract";
import { Vehicle } from "../../data/models/Vehicle";
import { TokenModel } from "../../data/models/TokenModel";

export interface UserProfileState {
  currentUser: User;
  sellerInfo: UserSignedContract;
  soldCars: Array<Vehicle>;
  carsWithoutContracts: Array<Vehicle>;
  token: TokenModel;
  isAuthenticated: Boolean;
}

export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const UNAUTHENTICATE_USER = "UNAUTHENTICATE_USER";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const FETCH_USER_SELLING_INFO = "FETCH_USER_SELLING_INFO";
export const FETCH_CARS_SOLD_BY_USER = "FETCH_CARS_SOLD_BY_USER";

export const FETCH_CARS_WITHOUT_CONTRACT = "FETCH_CARS_WITHOUT_CONTRACT";
export const SIGN_CONTRACT_FOR_CAR = "SIGN_CONTRACT_FOR_CAR";

interface AuthenticateUserAction {
  type: typeof AUTHENTICATE_USER;
  payload: TokenModel;
}

interface UnauthenticateUserAction {
  type: typeof UNAUTHENTICATE_USER;
}

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

interface FetchCarsWithoutContractAction {
  type: typeof FETCH_CARS_WITHOUT_CONTRACT;
  payload: Array<Vehicle>;
}

interface SelectCarForSigningContractAction {
  type: typeof SIGN_CONTRACT_FOR_CAR;
  payload: UserSignedContract;
}

export type UserProfileStateActionTypes =
  | AuthenticateUserAction
  | UnauthenticateUserAction
  | FetchCurrentUserAction
  | FetchUserSellingInfoAction
  | FetchCarsSoldByUserAction
  | FetchCarsWithoutContractAction
  | SelectCarForSigningContractAction;
