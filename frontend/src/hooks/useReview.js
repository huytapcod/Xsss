import { useMutationHook } from './useMutationHook';
import { reviewApi } from '../api';

export const useReview = () => {
  const {
    mutate: createReview,
    isLoading: createReviewLoading,
    error: createReviewError
  } = useMutationHook({
    mutationFn: ({ productId, reviewData }) => reviewApi.createReview(productId, reviewData)
  });

  const {
    data: productReviewsData,
    isLoading: productReviewsLoading,
    error: productReviewsError,
    mutate: fetchProductReviews
  } = useMutationHook({
    mutationFn: (productId) => reviewApi.getProductReviews(productId)
  });

  const {
    mutate: updateReview,
    isLoading: updateReviewLoading,
    error: updateReviewError
  } = useMutationHook({
    mutationFn: ({ reviewId, reviewData }) => reviewApi.updateReview(reviewId, reviewData)
  });

  const {
    mutate: deleteReview,
    isLoading: deleteReviewLoading,
    error: deleteReviewError
  } = useMutationHook({
    mutationFn: (reviewId) => reviewApi.deleteReview(reviewId)
  });

  const {
    data: userReviewsData,
    isLoading: userReviewsLoading,
    error: userReviewsError,
    mutate: fetchUserReviews
  } = useMutationHook({
    mutationFn: reviewApi.getUserReviews
  });

  return {
    createReview,
    createReviewLoading,
    createReviewError,
    productReviewsData,
    productReviewsLoading,
    productReviewsError,
    fetchProductReviews,
    updateReview,
    updateReviewLoading,
    updateReviewError,
    deleteReview,
    deleteReviewLoading,
    deleteReviewError,
    userReviewsData,
    userReviewsLoading,
    userReviewsError,
    fetchUserReviews
  };
}; 