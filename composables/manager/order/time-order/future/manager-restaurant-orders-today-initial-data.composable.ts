import { managerRestaurantOrdersFutureService } from '~/service/manager-restaurant/order/time-order/future/manager-restaurant-orders-today.service';
import { useOrderStore } from '~/store/order';
export const managerRestaurantOrdersFutureInitialDataComposable = async (page: number) => {
    const order = useOrderStore();
    const response = await managerRestaurantOrdersFutureService.ordersFuture(page);
    if (response) {
        order.setOrders(response);
    }
};
