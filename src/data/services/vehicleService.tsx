import API from "./../../utils/API";
import { Vehicle } from "../models/Vehicle";

export async function getAll(
  brandId?: number,
  modelId?: number,
  engineId?: number,
  supplierId?: number,
  userId?: number
) {
  var config = {
    params: {
      brand_id: brandId ? brandId : undefined,
      model_id: modelId ? modelId : undefined,
      engine_id: engineId ? engineId : undefined,
      supplier_id: supplierId ? supplierId : undefined,
      user_id: userId ? userId : undefined,
    },
  };

  return await API.get("/cars", config);
}

export async function getAllWaitingContract(
  brandId?: number,
  customerId?: number
) {
  var config = {
    params: {
      brand_id: brandId ? brandId : undefined,
      customer_id: customerId ? customerId : undefined,
    },
  };

  return await API.get("/cars-waiting-contracts", config);
}

export async function getCarsSoldBySeller(sellerId: number) {
  var config = {
    params: {
      seller_id: sellerId,
    },
  };

  return await API.get("/cars-sold-by-seller", config);
}

export async function getCarsBoughtByCustomer(customerId: number) {
  var config = {
    params: {
      customer_id: customerId,
    },
  };

  return await API.get("/cars-bought-by-customer", config);
}

export async function post(vehicle: Vehicle) {
  return await API.post("/cars", vehicle);
}

export async function put(vehicle: Vehicle) {
  return await API.put("/cars", vehicle);
}

export async function deleteItem(id: number) {
  return await API.delete("/cars/" + id);
}
