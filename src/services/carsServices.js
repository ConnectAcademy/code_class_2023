import api from "../api/api";

export const createNewCar = (data) => {
  return api.post("/cars", data);
};

export const getAllCars = () => {
  return api.get("/cars");
};
