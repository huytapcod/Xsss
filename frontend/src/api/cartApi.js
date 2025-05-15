import api from './api';

// Cart Management APIs
export const cartApi = {
  // Get cart
  getCart: () => {
    return api.get('/cart');
  },

  // Add item to cart
  addToCart: (productId, quantity) => {
    return api.post('/cart/items', { productId, quantity });
  },

  // Update cart item
  updateCartItem: (itemId, quantity) => {
    return api.put(`/cart/items/${itemId}`, { quantity });
  },

  // Remove item from cart
  removeFromCart: (itemId) => {
    return api.delete(`/cart/items/${itemId}`);
  },

  // Clear cart
  clearCart: () => {
    return api.delete('/cart');
  },

  // Get cart total
  getCartTotal: () => {
    return api.get('/cart/total');
  }
}; 