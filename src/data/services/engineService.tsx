import API from "./../../utils/API";

export async function getAll(brandId?: number) {
  var config = {
    params: {
      brand_id: brandId ? brandId : undefined,
    },
  };

  return await API.get("/engines", config);
}
