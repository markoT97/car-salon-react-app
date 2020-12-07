import API from "./../../utils/API";
import { Model } from "../models/Model";

export async function getAll(show: string = "available", brandId?: number) {
  var config = {
    params: {
      show,
      brand_id: brandId ? brandId : undefined,
    },
  };

  return await API.get("/models", config);
}

export async function post(model: Model) {
  return await API.post("/models", model);
}

export async function put(model: Model) {
  return await API.put("/models", model);
}

export async function deleteItem(id: number) {
  return await API.delete("/models/" + id);
}
