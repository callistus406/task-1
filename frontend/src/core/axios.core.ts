import axios from "axios";
const BASE_URL = "http://localhost:5100/api/v1";




export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  // withCredentials: true,
});


