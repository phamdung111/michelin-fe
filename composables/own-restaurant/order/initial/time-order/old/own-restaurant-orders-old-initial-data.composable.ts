import { ownRestaurantOrdersOldService } from '~/service/own-restaurant/order/time-order/old/own-restaurant-orders-old.service';
import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';
import { useOrderStore } from '~/store/order';

export const ownRestaurantOrdersOldInitialDataComposable = async (page: Number) => {
    const order = useOrderStore();
    const response = await ownRestaurantOrdersOldService.ordersOld(page);
    if (response) {
        order.setOrders(response);
    }
};
