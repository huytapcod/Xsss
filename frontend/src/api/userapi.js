import api from "./api";

// User Management APIs
export const userApi = {
  // Create new user
  createUser: (userData) => {
    return api.post("/users", userData);
  },

  // Get all users
  getAllUsers: () => {
    return api.get("/users");
  },

  // Get user by ID
  getUserById: (userId) => {
    return api.get(`/users/${userId}`);
  },

  // Get current user info
  getMyInfo: () => {
    return api.get("/users/myInfor");
  },

  // Update user
  updateUser: (userId, userData) => {
    return api.put(`/users/${userId}`, userData);
  },

  // Delete multiple users
  deleteMultipleUsers: (userIds) => {
    return api.delete("/users/delete-multiple", { data: { userIds } });
  }
};
