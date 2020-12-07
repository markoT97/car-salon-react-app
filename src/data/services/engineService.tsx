import API from "./../../utils/API";
import { Engine } from "../models/Engine";

export async function getAll(show: string = "available", brandId?: number) {
  var config = {
    params: {
      show,
      brand_id: brandId ? brandId : undefined,
    },
  };

  return await API.get("/engines", config);
}

export async function post(engine: Engine) {
  return await API.post("/engines", engine);
}

export async function put(engine: Engine) {
  return await API.put("/engines", engine);
}

export async function deleteItem(id: number) {
  return await API.delete("/engines/" + id);
}
