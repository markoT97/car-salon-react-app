import API from "./../../utils/API";
import { Equipment } from "../models/Equipment";

export async function getAll() {
  return await API.get("/equipments");
}

export async function post(equipment: Equipment) {
  return await API.post("/equipments", equipment);
}

export async function put(equipment: Equipment) {
  return await API.put("/equipments", equipment);
}

export async function deleteItem(id: number) {
  return await API.delete("/equipments/" + id);
}
