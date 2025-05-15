import { useMutationHook } from './useMutationHook';
import { cartApi } from '../api';

export const useCart = () => {
  const {
    data: cartData,
    isLoading: cartLoading,
    error: cartError,
    mutate: fetchCart
  } = useMutationHook({
    mutationFn: cartApi.getCart
  });

  const {
    mutate: addToCart,
    isLoading: addToCartLoading,
    error: addToCartError
  } = useMutationHook({
    mutationFn: ({ productId, quantity }) => cartApi.addToCart(productId, quantity)
  });

  const {
    mutate: updateCartItem,
    isLoading: updateCartLoading,
    error: updateCartError
  } = useMutationHook({
    mutationFn: ({ itemId, quantity }) => cartApi.updateCartItem(itemId, quantity)
  });

  const {
    mutate: removeFromCart,
    isLoading: removeCartLoading,
    error: removeCartError
  } = useMutationHook({
    mutationFn: (itemId) => cartApi.removeFromCart(itemId)
  });

  const {
    mutate: clearCart,
    isLoading: clearCartLoading,
    error: clearCartError
  } = useMutationHook({
    mutationFn: cartApi.clearCart
  });

  return {
    cartData,
    cartLoading,
    cartError,
    fetchCart,
    addToCart,
    addToCartLoading,
    addToCartError,
    updateCartItem,
    updateCartLoading,
    updateCartError,
    removeFromCart,
    removeCartLoading,
    removeCartError,
    clearCart,
    clearCartLoading,
    clearCartError
  };
}; 