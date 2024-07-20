import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';
import { useOrderStore } from '~/store/order';
export const restaurantOrdersTodayCountInitialDataComposable = async () => {
    const order = useOrderStore();
    const response = await orderRestaurantService.countOrderToday();
    console.log(response);

    order.setCountOrdersToday(response);
};
