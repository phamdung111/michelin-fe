import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';
import { useOrderStore } from '~/store/order';
import { useUserStore } from '~/store/user';
export const countOrdersTodayInitialDataComposable = async () => {
    const order = useOrderStore();
    const user = useUserStore();

    const response = await orderRestaurantService.countOrderToday();
    if (Number.isInteger(response)) {
        order.setCountOrdersToday(response);
    }
};
