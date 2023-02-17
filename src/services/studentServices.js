import axios from "axios";

const jsonServerApi = axios.create({
  baseURL: "http://localhost:3001",
});

jsonServerApi.interceptors.response.use((res) => res.data);

export const listAllStudents = () => {
  return jsonServerApi.get("/ucenici");
};

export const getSingleStudent = (id) => {
  return jsonServerApi.get("/ucenici/" + id);
};

export default jsonServerApi;
