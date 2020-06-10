import API from "./../../utils/API";

export async function getAll(userId?: number) {
  var config = {
    params: {
      user_id: userId ? userId : undefined,
    },
  };

  return await API.get("/user-signed-contracts", config);
}
