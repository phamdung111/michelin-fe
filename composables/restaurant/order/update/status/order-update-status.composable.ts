import type { restaurantOrderUpdateStatusInterface } from '~/interface/request/restaurant/order/update/restaurant-order-update-status.interface';
import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';

export const orderUpdateStatusComposable = async (payload: restaurantOrderUpdateStatusInterface) => {
    const response = await orderRestaurantService.update(payload);
    return response;
};
