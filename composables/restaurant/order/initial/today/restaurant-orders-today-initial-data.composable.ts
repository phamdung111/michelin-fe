import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';
import { useOrderStore } from '~/store/order';
export const restaurantOrdersTodayInitialDataComposable = async (page: Number) => {
    const order = useOrderStore();
    const response = await orderRestaurantService.ordersToday(page);
    order.setOrderToday(response);
};
