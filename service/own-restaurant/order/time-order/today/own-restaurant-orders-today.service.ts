import type { OrdersRestaurantResponseInterface } from '~/interface/response/restaurant/order/orders-restaurant-response.interface';
import { http } from '~/utils/http/http';

export const ownRestaurantOrdersTodayService = Object.freeze({
    ordersToday: async (page: Number): Promise<OrdersRestaurantResponseInterface> => {
        try {
            const response = await http().post('own-restaurant/own-orders-restaurants-today', {
                page: page,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
