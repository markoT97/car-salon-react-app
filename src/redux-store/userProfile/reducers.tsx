import {
  FETCH_CURRENT_USER,
  AuthenticationActionTypes,
  FETCH_USER_SELLING_INFO,
  FETCH_CARS_SOLD_BY_USER,
  AUTHENTICATE_USER,
  UNAUTHENTICATE_USER,
} from "./types";
import { AuthenticationState } from "./types";
import { defaultUser } from "../../data/models/User";
import { defaultUserSignedContract } from "../../data/models/UserSignedContract";
import { defaultToken } from "../../data/models/TokenModel";
import { TOKEN_IN_LOCAL_STORAGE } from "../../shared/constants";
import jwtDecode from "jwt-decode";

const tokenFromStorage = localStorage.getItem(TOKEN_IN_LOCAL_STORAGE);

const initialState: AuthenticationState = {
  currentUser: defaultUser,
  sellingInfo: defaultUserSignedContract,
  soldCars: [],
  token: tokenFromStorage ? jwtDecode(tokenFromStorage) : defaultToken,
  isAuthenticated: localStorage.getItem("token") ? true : false,
};

function userProfileReducer(
  state = initialState,
  action: AuthenticationActionTypes
): AuthenticationState {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return { ...state, token: action.payload, isAuthenticated: true };
    case UNAUTHENTICATE_USER:
      return { ...state, isAuthenticated: false };
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

export default userProfileReducer;
