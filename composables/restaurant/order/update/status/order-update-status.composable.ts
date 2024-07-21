import type { RestaurantOrderUpdateStatusInterface } from '~/interface/request/restaurant/order/update/restaurant-order-update-status.interface';
import { orderRestaurantService } from '~/service/restaurant/order/order-restaurant.service';

export const orderUpdateStatusComposable = async (payload: RestaurantOrderUpdateStatusInterface) => {
    const response = await orderRestaurantService.update(payload);
    return response;
};
