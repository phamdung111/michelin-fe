import { managerRestaurantOrdersOldService } from '~/service/manager-restaurant/order/time-order/old/manager-restaurant-orders-old.service';
import { useOrderStore } from '~/store/order';
export const managerRestaurantOrdersOldInitialDataComposable = async (page: number) => {
    const order = useOrderStore();
    const response = await managerRestaurantOrdersOldService.ordersOld(page);
    if (response) {
        order.setOrders(response);
    }
};
