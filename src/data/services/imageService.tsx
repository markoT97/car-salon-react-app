import API from "./../../utils/API";

export async function getAll(modelId?: number) {
  return await API.get("/images" + (modelId ? "?model_id=" + modelId : ""));
}
