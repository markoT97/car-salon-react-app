import API from "./../../utils/API";
import { UserSignedContract } from "../models/UserSignedContract";
import { Contract } from "./../models/Contract";

export async function getAll(userId?: number) {
  var config = {
    params: {
      user_id: userId ? userId : undefined,
    },
  };

  return await API.get("/user-signed-contracts", config);
}

export async function postContract(contract: Contract) {
  return await API.post("/contracts", contract);
}

export async function postUserSignedContract(
  userSignedContract: UserSignedContract
) {
  return await API.post("/user-signed-contracts", userSignedContract);
}
