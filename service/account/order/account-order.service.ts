import type { RestaurantOrderUpdateStatusInterface } from '~/interface/request/restaurant/order/update/restaurant-order-update-status.interface';
import type { AccountOrdersResponseInterface } from '~/interface/response/account/order/account-orders-response.interface';
import { http } from '~/utils/http/http';

export const accountOrderService = Object.freeze({
    orders: async (page: number): Promise<AccountOrdersResponseInterface> => {
        try {
            const response = await http().post('api/auth/orders-user', {
                page: page,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    cancelOrder: async (orderId: number) => {
        try {
            const response = await http().post('api/auth/user-cancel-order', {
                orderId: orderId,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
