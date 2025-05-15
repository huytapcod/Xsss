import api from './api';

// Authentication APIs
export const authApi = {
  // Login
  login: (credentials) => {
    return api.post('/auth/log-in', credentials);
  },

  // Register
  register: (userData) => {
    return api.post('/auth/register', userData);
  },

  // Logout
  logout: () => {
    return api.post('/auth/logout');
  },

  // Refresh token
  refreshToken: () => {
    return api.post('/auth/refresh-token');
  },

  // Forgot password
  forgotPassword: (email) => {
    return api.post('/auth/forgot-password', { email });
  },

  // Reset password
  resetPassword: (token, newPassword) => {
    return api.post('/auth/reset-password', { token, newPassword });
  }
}; 