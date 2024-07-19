import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';
import { useOrderStore } from '~/store/order';
export const restaurantOrdersFutureInitialDataComposable = async (page: Number) => {
    const order = useOrderStore();
    const response = await orderRestaurantService.ordersFuture(page);
    order.setOrders(response);
};
