import API from "./../../utils/API";

export async function getAll(
  modelId?: number,
  engineId?: number,
  supplierId?: number
) {
  var config = {
    params: {
      model_id: modelId ? modelId : undefined,
      engine_id: engineId ? engineId : undefined,
      supplier_id: supplierId ? supplierId : undefined,
    },
  };

  return await API.get("/brands", config);
}
