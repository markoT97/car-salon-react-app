import store from "./../redux-store/index";
import { UNAUTHENTICATE_USER } from "../redux-store/userProfile/types";

const getIsLoggedIn = () => {
  const state = store.getState();
  const { token } = state.userProfile;

  if (token.jti === "0") {
    return false;
  }

  const isExpired = token.exp * 1000 < Date.now();

  if (isExpired) {
    store.dispatch({ type: UNAUTHENTICATE_USER });
  }

  return !isExpired;
};

export default getIsLoggedIn;
