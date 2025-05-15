import api from './api';

// Review Management APIs
export const reviewApi = {
  // Create review
  createReview: (productId, reviewData) => {
    return api.post(`/reviews/${productId}`, reviewData);
  },

  // Get product reviews
  getProductReviews: (productId) => {
    return api.get(`/reviews/product/${productId}`);
  },

  // Update review
  updateReview: (reviewId, reviewData) => {
    return api.put(`/reviews/${reviewId}`, reviewData);
  },

  // Delete review
  deleteReview: (reviewId) => {
    return api.delete(`/reviews/${reviewId}`);
  },

  // Get user reviews
  getUserReviews: () => {
    return api.get('/reviews/user');
  }
}; 