import API from "./../../utils/API";

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
