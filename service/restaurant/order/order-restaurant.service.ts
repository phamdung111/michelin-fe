import type { RestaurantOrderUpdateStatusInterface } from '~/interface/request/restaurant/order/update/restaurant-order-update-status.interface';
import type { OrdersRestaurantResponseInterface } from '~/interface/response/restaurant/order/orders-restaurant-response.interface';
import { http } from '~/utils/http/http';

export const orderRestaurantService = Object.freeze({
    countOrderToday: async (): Promise<number> => {
        try {
            const response = await http().post('api/count-orders-today');
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },

    ordersFuture: async (page: Number): Promise<OrdersRestaurantResponseInterface> => {
        try {
            const response = await http().post('own-restaurant/future-order-restaurant', {
                page: page,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },

    update: async (payload: RestaurantOrderUpdateStatusInterface): Promise<Boolean> => {
        try {
            const response = await http().post('api/change-status', payload);
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
