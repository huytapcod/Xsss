import { useMutationHook } from './useMutationHook';
import { wishlistApi } from '../api';

export const useWishlist = () => {
  const {
    data: wishlistData,
    isLoading: wishlistLoading,
    error: wishlistError,
    mutate: fetchWishlist
  } = useMutationHook({
    mutationFn: wishlistApi.getWishlist
  });

  const {
    mutate: addToWishlist,
    isLoading: addToWishlistLoading,
    error: addToWishlistError
  } = useMutationHook({
    mutationFn: (productId) => wishlistApi.addToWishlist(productId)
  });

  const {
    mutate: removeFromWishlist,
    isLoading: removeFromWishlistLoading,
    error: removeFromWishlistError
  } = useMutationHook({
    mutationFn: (productId) => wishlistApi.removeFromWishlist(productId)
  });

  const {
    data: wishlistCheckData,
    isLoading: wishlistCheckLoading,
    error: wishlistCheckError,
    mutate: checkWishlistItem
  } = useMutationHook({
    mutationFn: (productId) => wishlistApi.checkWishlistItem(productId)
  });

  return {
    wishlistData,
    wishlistLoading,
    wishlistError,
    fetchWishlist,
    addToWishlist,
    addToWishlistLoading,
    addToWishlistError,
    removeFromWishlist,
    removeFromWishlistLoading,
    removeFromWishlistError,
    wishlistCheckData,
    wishlistCheckLoading,
    wishlistCheckError,
    checkWishlistItem
  };
}; 