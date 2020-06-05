import API from "./../../utils/API";

export async function getAll() {
  return await API.get("/cars");
}
