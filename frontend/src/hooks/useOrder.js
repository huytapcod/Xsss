import { useMutationHook } from './useMutationHook';
import { orderApi } from '../api';

export const useOrder = () => {
  const {
    data: ordersData,
    isLoading: ordersLoading,
    error: ordersError,
    mutate: fetchOrders
  } = useMutationHook({
    mutationFn: orderApi.getAllOrders
  });

  const {
    mutate: createOrder,
    isLoading: createOrderLoading,
    error: createOrderError
  } = useMutationHook({
    mutationFn: (orderData) => orderApi.createOrder(orderData)
  });

  const {
    mutate: updateOrderStatus,
    isLoading: updateStatusLoading,
    error: updateStatusError
  } = useMutationHook({
    mutationFn: ({ orderId, status }) => orderApi.updateOrderStatus(orderId, status)
  });

  const {
    mutate: cancelOrder,
    isLoading: cancelOrderLoading,
    error: cancelOrderError
  } = useMutationHook({
    mutationFn: (orderId) => orderApi.cancelOrder(orderId)
  });

  const {
    data: orderHistoryData,
    isLoading: orderHistoryLoading,
    error: orderHistoryError,
    mutate: fetchOrderHistory
  } = useMutationHook({
    mutationFn: orderApi.getOrderHistory
  });

  return {
    ordersData,
    ordersLoading,
    ordersError,
    fetchOrders,
    createOrder,
    createOrderLoading,
    createOrderError,
    updateOrderStatus,
    updateStatusLoading,
    updateStatusError,
    cancelOrder,
    cancelOrderLoading,
    cancelOrderError,
    orderHistoryData,
    orderHistoryLoading,
    orderHistoryError,
    fetchOrderHistory
  };
}; 