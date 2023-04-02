import axios from "axios";

export interface iApiError {
  error: string;
  message: string;
}

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000, // 5 sec.
});

export default api;
