import axios from "axios";
import { TOKEN_IN_LOCAL_STORAGE } from "../shared/constants";
axios.defaults.headers.common["Authorization"] = localStorage.getItem(
  TOKEN_IN_LOCAL_STORAGE
);

export default axios.create({
  baseURL: "http://localhost:8081/api/",
});
