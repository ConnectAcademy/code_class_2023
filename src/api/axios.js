import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001" });

api.interceptors.response.use((res) => res.data);

export default api;
