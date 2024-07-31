import { ownRestaurantOrdersTodayService } from '~/service/own-restaurant/order/time-order/today/own-restaurant-orders-today.service';
import { useOrderStore } from '~/store/order';
export const ownRestaurantOrdersTodayInitialDataComposable = async (page: Number) => {
    const order = useOrderStore();
    const response = await ownRestaurantOrdersTodayService.ordersToday(page);
    order.setOrders(response);
};
