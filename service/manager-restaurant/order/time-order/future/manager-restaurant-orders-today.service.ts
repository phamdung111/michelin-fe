import type { OrdersRestaurantResponseInterface } from '~/interface/response/restaurant/order/orders-restaurant-response.interface';
import { http } from '~/utils/http/http';

export const managerRestaurantOrdersFutureService = Object.freeze({
    ordersFuture: async (page: number): Promise<OrdersRestaurantResponseInterface | undefined> => {
        try {
            const response = await http().post('manager/orders-restaurant-future', {
                page: page,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
