import api from './api';

// Wishlist Management APIs
export const wishlistApi = {
  // Get wishlist
  getWishlist: () => {
    return api.get('/wishlist');
  },

  // Add to wishlist
  addToWishlist: (productId) => {
    return api.post('/wishlist', { productId });
  },

  // Remove from wishlist
  removeFromWishlist: (productId) => {
    return api.delete(`/wishlist/${productId}`);
  },

  // Check if product is in wishlist
  checkWishlistItem: (productId) => {
    return api.get(`/wishlist/check/${productId}`);
  }
}; 