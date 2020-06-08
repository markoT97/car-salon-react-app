import API from "./../../utils/API";

export async function get(userId: number) {
  return await API.get("/users/" + userId);
}
