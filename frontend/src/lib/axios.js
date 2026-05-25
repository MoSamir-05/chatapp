import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://https://chatapp-backend.onrender.com/api" : "/api",
  withCredentials: true,
});
