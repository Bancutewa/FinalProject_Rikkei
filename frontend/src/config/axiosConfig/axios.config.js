import axios from "axios";

let token = localStorage.getItem('token') || null;

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = token ? token : "";
  return config;
});


export default axiosInstance;
