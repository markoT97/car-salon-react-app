import {
  FETCH_CURRENT_USER,
  UserProfileStateActionTypes,
  FETCH_USER_SELLING_INFO,
  FETCH_CARS_SOLD_BY_USER,
  AUTHENTICATE_USER,
  UNAUTHENTICATE_USER,
  FETCH_CARS_WITHOUT_CONTRACT,
  SIGN_CONTRACT_FOR_CAR,
} from "./types";
import { UserProfileState } from "./types";
import { defaultUser } from "../../data/models/User";
import { defaultUserSignedContract } from "../../data/models/UserSignedContract";
import { defaultToken } from "../../data/models/TokenModel";
import { TOKEN_IN_LOCAL_STORAGE } from "../../shared/constants";
import jwtDecode from "jwt-decode";

const tokenFromStorage = localStorage.getItem(TOKEN_IN_LOCAL_STORAGE);

const initialState: UserProfileState = {
  currentUser: defaultUser,
  customerInfo: defaultUserSignedContract,
  boughtCars: [],
  carsWithoutContracts: [],
  token: tokenFromStorage ? jwtDecode(tokenFromStorage) : defaultToken,
  isAuthenticated: tokenFromStorage ? true : false,
};

function userProfileReducer(
  state = initialState,
  action: UserProfileStateActionTypes
): UserProfileState {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return { ...state, token: action.payload, isAuthenticated: true };
    case UNAUTHENTICATE_USER:
      localStorage.removeItem(TOKEN_IN_LOCAL_STORAGE);
      return initialState;
    case FETCH_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case FETCH_USER_SELLING_INFO:
      return { ...state, customerInfo: action.payload };
    case FETCH_CARS_SOLD_BY_USER:
      return { ...state, boughtCars: action.payload };
    case FETCH_CARS_WITHOUT_CONTRACT:
      return { ...state, carsWithoutContracts: action.payload };
    case SIGN_CONTRACT_FOR_CAR:
      return {
        ...state,
        carsWithoutContracts: state.carsWithoutContracts.filter(
          (car) => car.carId !== action.payload.carId
        ),
        customerInfo: {
          ...state.customerInfo,
          numberOfBoughtCars: state.customerInfo.numberOfBoughtCars
            ? state.customerInfo.numberOfBoughtCars + 1
            : undefined,
        },
      };
    default:
      return state;
  }
}

export default userProfileReducer;
