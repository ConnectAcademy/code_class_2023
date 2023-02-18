import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.response.use((res) => res.data);

// primer za request interceptor
// api.interceptors.request.use((config) => {
//   console.log(config);
//   config.headers["Mirsat"] = "Mirsat/Sefidanoski";
//   return config;
// });

export default api;
