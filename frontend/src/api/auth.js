import api from "./api";

// Login user
export const loginUser = async ({ email, password }) => {
  const response = await api.post("/users/login", { email, password });
  return response.data;
};

// Register user
export const registerUser = async ({ name, email, password, confirmPassword }) => {
  const response = await api.post("/users", {
    name,
    email,
    password,
    confirmPassword,
  });
  return response.data;
};

// Logout user
export const logoutUser = async () => {
  const response = await api.post("/users/logout");
  return response.data;
};

// Fetch current user's profile
export const fetchProfile = async () => {
  const response = await api.get("/users/myInfor");
  return response.data;
};

// Update current user's profile
export const updateProfile = async (userId, data) => {
  const response = await api.put(`/users/${userId}`, data);
  return response.data;
};

// Get all users
export const getAllUsers = async ({ search, page = 1, limit = 10 }) => {
  const response = await api.get("/users", {
    params: { search, page, limit },
  });
  return response.data;
};

// Get user by ID
export const getUserById = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

// Update user by ID
export const updateUserById = async (userId, data) => {
  const response = await api.put(`/users/${userId}`, data);
  return response.data;
};

// Delete multiple users
export const deleteMultipleUsers = async (userIds) => {
  const response = await api.delete("/users/delete-multiple", {
    data: { userIds },
  });
  return response.data;
};

// Create a new user
export const createUser = async (userData) => {
  const response = await api.post("/users", userData);
  return response.data;
};
