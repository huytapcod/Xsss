import axios from "axios";

// Tạo instance axios cho các API liên quan đến sản phẩm
const productApi = axios.create({
  baseURL: "http://localhost:8080/identity/api/product", // Base URL cho sản phẩm
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để gắn token vào header nếu cần
productApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default productApi;