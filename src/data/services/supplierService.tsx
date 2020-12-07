import API from "./../../utils/API";
import { Supplier } from "../models/Supplier";

export async function getAll(show: string = "available", brandId?: number) {
  var config = {
    params: {
      show,
      brand_id: brandId ? brandId : undefined,
    },
  };

  return await API.get("/suppliers", config);
}

export async function post(supplier: Supplier) {
  return await API.post("/suppliers", supplier);
}

export async function put(supplier: Supplier) {
  return await API.put("/suppliers", supplier);
}

export async function deleteItem(id: number) {
  return await API.delete("/suppliers/" + id);
}
