import {
  FETCH_CURRENT_USER,
  AuthenticationActionTypes,
  FETCH_USER_SELLING_INFO,
  FETCH_CARS_SOLD_BY_USER,
} from "./types";
import { AuthenticationState } from "./types";
import { defaultUser } from "../../data/models/User";
import { defaultUserSignedContract } from "../../data/models/UserSignedContract";

const initialState: AuthenticationState = {
  currentUser: defaultUser,
  sellingInfo: defaultUserSignedContract,
  soldCars: [],
};

function authenticationReducer(
  state = initialState,
  action: AuthenticationActionTypes
): AuthenticationState {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case FETCH_USER_SELLING_INFO:
      return { ...state, sellingInfo: action.payload };
    case FETCH_CARS_SOLD_BY_USER:
      return { ...state, soldCars: action.payload };
    default:
      return state;
  }
}

export default authenticationReducer;
