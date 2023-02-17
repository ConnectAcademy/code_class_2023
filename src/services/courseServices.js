import jsonServerApi from "./studentServices";

export const addCourse = (data) => {
  return jsonServerApi.post("/courses", data);
};

export const getListeningCourses = (ids) => {
  return jsonServerApi.get("/courses", {
    params: {
      id: ids,
    },
  });
};

export const getAllCourses = () => {
  return jsonServerApi.get("/courses");
};
