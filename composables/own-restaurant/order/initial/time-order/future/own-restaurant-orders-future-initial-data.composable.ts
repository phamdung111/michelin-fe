import { ownRestaurantOrderFutureService } from '~/service/own-restaurant/order/time-order/future/own-restaurant-order-future.service';
import { useOrderStore } from '~/store/order';
export const ownRestaurantOrdersFutureInitialDataComposable = async (page: Number) => {
    const order = useOrderStore();
    const response = await ownRestaurantOrderFutureService.ordersFuture(page);
    if (response) {
        order.setOrders(response);
    }
};
