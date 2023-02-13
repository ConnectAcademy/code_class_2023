import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.response.use((res) => {
  return res.data;
});

export const getUcenici = async () => {
  return api.get("ucenici");
};

export const getUcenik = (id) => {
  return api.get(`ucenici/${id}`);
};

export const addUcenik = (data) => {
  return api.post(`ucenici`, data);
};
