import type { OrdersRestaurantResponseInterface } from '~/interface/response/restaurant/order/orders-restaurant-response.interface';
import { http } from '~/utils/http/http';

export const ownRestaurantOrdersOldService = Object.freeze({
    ordersOld: async (page: Number): Promise<OrdersRestaurantResponseInterface> => {
        try {
            const response = await http().post('own-restaurant/old-order-restaurant', {
                page: page,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
