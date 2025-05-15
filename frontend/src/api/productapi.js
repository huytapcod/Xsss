import api from './api/product';

// Product Management APIs
export const productApi = {
  // Get all products
  getAllProducts: (params) => {
    return api.get({ params });
  },

  // Get product by ID
  getProductById: (productId) => {
    return api.get(`/${productId}`);
  },

  // Create new product
  createProduct: (productData) => {
    return api.post('/create', productData);
  },

  // Update product
  updateProduct: (productId, productData) => {
    return api.put(`/${productId}`, productData);
  },

  // Delete product
  deleteProduct: (productId) => {
    return api.delete(`/${productId}`);
  },

  // Get products by category
  getProductsByCategory: (categoryId) => {
    return api.get(`/category/${categoryId}`);
  },

  // Search products
  searchProducts: (query) => {
    return api.get('/search', { params: { query } });
  }
};