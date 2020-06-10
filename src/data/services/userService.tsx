import API from "./../../utils/API";
import { AuthenticationModel } from "./../models/AuthenticationModel";
import { RegisterModel } from "../models/RegisterModel";
import { User } from "../models/User";

const root = "/users";

export async function get(userId: number) {
  return await API.get(root + "/" + userId);
}

export async function post(user: RegisterModel) {
  return await API.post(root, { ...user, role: "User" });
}

export async function put(user: User) {
  return await API.put(root, user);
}

export async function authenticate(authenticationModel: AuthenticationModel) {
  return await API.post(root + "/authentication", authenticationModel);
}
