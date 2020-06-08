import API from "./../../utils/API";

export async function getAll(userId?: number, jmbg?: string, brandId?: number) {
  var config = {
    params: {
      user_id: userId ? userId : undefined,
      jmbg: jmbg ? jmbg : undefined,
      brand_id: brandId ? brandId : undefined,
    },
  };

  return await API.get("/user-signed-contracts", config);
}
