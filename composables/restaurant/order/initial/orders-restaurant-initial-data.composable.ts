import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';
import { useOrderStore } from '~/store/order';
export const ordersRestaurantInitialDataComposable = async (page: Number) => {
    const order = useOrderStore();
    const response = await orderRestaurantService.orders(page);
    order.setOrderToday(response);
};
