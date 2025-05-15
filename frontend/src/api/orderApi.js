import api from './api';

// Order Management APIs
export const orderApi = {
  // Create order
  createOrder: (orderData) => {
    return api.post('/order/create', orderData);
  },

  // Get all orders
  getAllOrders: () => {
    return api.get('/orders');
  },

  // Get order by ID
  getOrderById: (orderId) => {
    return api.get(`/order/${orderId}`);
  },

  // Update order status
  updateOrderStatus: (orderId, status) => {
    return api.put(`/order/${orderId}/status`, { status });
  },

  // Cancel order
  cancelOrder: (orderId) => {
    return api.post(`/order/${orderId}/cancel`);
  },

  // Get order history
  getOrderHistory: () => {
    return api.get('/order/history');
  }
}; 