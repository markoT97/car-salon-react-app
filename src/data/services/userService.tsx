import API from "./../../utils/API";
import { AuthenticationModel } from "./../models/AuthenticationModel";

const root = "/users";

export async function get(userId: number) {
  return await API.get(root + "/" + userId);
}

export async function authenticate(authenticationModel: AuthenticationModel) {
  return await API.post(root + "/authentication", authenticationModel);
}
