import axios from "axios";

export const Instance = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
export default Instance