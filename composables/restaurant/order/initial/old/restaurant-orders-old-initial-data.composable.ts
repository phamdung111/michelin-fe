import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';
import { useOrderStore } from '~/store/order';

export const restaurantOrdersOldInitialDataComposable = async (page: Number) => {
    const order = useOrderStore();
    const response = await orderRestaurantService.ordersOld(page);
    order.setOrderToday(response);
};
