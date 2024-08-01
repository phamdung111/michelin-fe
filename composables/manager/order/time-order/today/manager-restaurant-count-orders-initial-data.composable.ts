import { managerRestaurantCountOrderService } from '~/service/manager-restaurant/order/time-order/today/manager-restaurant-count-order.service';
import { useOrderStore } from '~/store/order';
export const managerRestaurantCountOrdersInitialData = async () => {
    const order = useOrderStore();
    const response = await managerRestaurantCountOrderService.managerCountOrder();
    if (response) {
        order.setCountOrdersToday(response);
    }
};
