import jsonServerApi from "./studentServices";

export const getStudentComments = (sId) => {
  return jsonServerApi.get("/comments", {
    params: {
      studentId: sId,
    },
  });
};
