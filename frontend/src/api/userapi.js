import api from "./api";

export const getMyInfo = async () => {
  const response = await api.get("/myInfor");
  return response.data;
};

export const updateUser = async (userId, userData) => {
  const response = await api.put(`/${userId}`, userData);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await api.post("/", userData);
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get("/");
  return response.data;
};
