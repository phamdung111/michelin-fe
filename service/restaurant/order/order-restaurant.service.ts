import type { restaurantOrderUpdateStatusInterface } from '~/interface/request/restaurant/order/update/restaurant-order-update-status.interface';
import type { OrdersRestaurantResponseInterface } from '~/interface/response/restaurant/order/orders-restaurant-response.interface';
import { http } from '~/utils/http/http';

export const orderRestaurantService = Object.freeze({
    countOrderToday: async (): Promise<number> => {
        try {
            const response = await http().post('api/auth/count-orders-today');
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    orders: async (page: Number): Promise<OrdersRestaurantResponseInterface> => {
        try {
            const response = await http().post('api/auth/order-restaurant-today', {
                page: page,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    update: async (payload: restaurantOrderUpdateStatusInterface): Promise<Boolean> => {
        try {
            const response = await http().post('api/auth/change-status', payload);
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
