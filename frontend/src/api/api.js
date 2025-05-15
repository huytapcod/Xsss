// api.js
import axios from "axios";
export const baseURL = "http://localhost:8080/identity";

// 1. Tạo instance
export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Interceptor: Gắn token vào header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 3. Interceptor: Xử lý khi token hết hạn (401)
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const response = await axios.post(
//           "http://localhost:8080/auth/refresh-token",
//           {},
//           { withCredentials: true }
//         );

//         const { accessToken } = response.data;
//         localStorage.setItem("token", accessToken);
//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;

//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error("Refresh token failed", refreshError);
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         window.location.href = "/login";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;
