import productApi from "./productApi"; // Import instance axios cho sản phẩm

// Lấy tất cả sản phẩm với các tham số lọc
export const getAllProducts = async (params) => {
  const res = await productApi.get("/", {
    params: { ...params, pageNumber: params.pageNumber || 0 }, // Đảm bảo pageNumber
  });
  return res.data; // Backend trả về Page<Product>, cần xử lý trong component
};

// Xóa sản phẩm theo ID
export const deleteProductById = async (id) => {
  const { data } = await productApi.delete(`/${id}`);
  return data; // Backend trả về ApiResponse { message }
};

// Tạo sản phẩm mới
export const createProduct = async (formData) => {
  const { data } = await productApi.post("/create", formData);
  return data; // Backend trả về Product
};

// Cập nhật sản phẩm
export const updateProduct = async ({ id, formData }) => {
  const { data } = await productApi.put(`/${id}`, formData);
  return data; // Backend trả về Product
};

// Lấy sản phẩm theo ID
export const getProductById = async (id) => {
  const { data } = await productApi.get(`/${id}`);
  return data; // Backend trả về Product
};

// Xóa nhiều sản phẩm
export const deleteMultipleProducts = async (ids) => {
  const { data } = await productApi.delete("/delete-many", {
    data: { ids }, // Gửi danh sách ID sản phẩm cần xóa
  });
  return data; // Backend trả về ApiResponse { message }
};

// Lấy tất cả sản phẩm không có tham số
export const allProducts = async () => {
  const res = await productApi.get("/");
  return res.data; // Backend trả về Page<Product>
};