import { ownRestaurantCountOrdersService } from '~/service/own-restaurant/order/time-order/today/own-restaurant-count-orders.service';
import { useOrderStore } from '~/store/order';

export const ownRestaurantCountOrdersInitialComposable = async () => {
    const order = useOrderStore();
    const response = await ownRestaurantCountOrdersService.countOrderToday();
    if (response) {
        order.setCountOrdersToday(response);
    }
};
