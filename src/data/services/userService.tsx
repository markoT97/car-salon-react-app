import API from "./../../utils/API";
import { AuthenticationModel } from "./../models/AuthenticationModel";
import { RegisterModel } from "../models/RegisterModel";

const root = "/users";

export async function get(userId: number) {
  return await API.get(root + "/" + userId);
}

export async function post(user: RegisterModel) {
  return await API.post(root, { ...user, role: "User" });
}

export async function authenticate(authenticationModel: AuthenticationModel) {
  return await API.post(root + "/authentication", authenticationModel);
}
