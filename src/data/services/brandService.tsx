import API from "./../../utils/API";
import { Brand } from "../models/Brand";

export async function getAll(
  show: string = "available",
  modelId?: number,
  engineId?: number,
  supplierId?: number,
  page?: number,
  pageSize?: number
) {
  var config = {
    params: {
      show,
      model_id: modelId ? modelId : undefined,
      engine_id: engineId ? engineId : undefined,
      supplier_id: supplierId ? supplierId : undefined,
      page: page ? page : undefined,
      page_size: pageSize ? pageSize : undefined,
    },
  };

  return await API.get("/brands", config);
}

export async function post(brand: Brand) {
  return await API.post("/brands", brand);
}

export async function put(brand: Brand) {
  return await API.put("/brands", brand);
}

export async function deleteItem(id: number) {
  return await API.delete("/brands/" + id);
}
