import API from "./../../utils/API";
import { Contract } from "./../models/Contract";

const root = "contracts";

export async function getAll(userId?: number) {
  var config = {
    params: {
      user_id: userId ? userId : undefined,
    },
  };

  return await API.get(root, config);
}

export async function postContract(contract: Contract) {
  return await API.post(root, contract);
}
