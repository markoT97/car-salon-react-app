import API from "./../../utils/API";

export async function getAll(modelId?: number) {
  var config = {
    params: {
      model_id: modelId ? modelId : undefined,
    },
  };

  return await API.get("/images", config);
}
