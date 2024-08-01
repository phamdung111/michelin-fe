import { managerRestaurantOrdersTodayService } from '~/service/manager-restaurant/order/time-order/today/manager-restaurant-orders-today.service';
import { useOrderStore } from '~/store/order';
export const managerRestaurantOrdersTodayInitialDataComposable = async (page: number) => {
    const order = useOrderStore();
    const response = await managerRestaurantOrdersTodayService.ordersToday(page);
    if (response) {
        order.setOrders(response);
    }
};
