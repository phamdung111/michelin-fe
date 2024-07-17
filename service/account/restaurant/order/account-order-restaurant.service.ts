import type { OrderRequestInterface } from '~/interface/request/order/order-request.interface';
import { http } from '~/utils/http/http';

export const accountOrderRestaurantService = Object.freeze({
    ordering: async (payload: OrderRequestInterface) => {
        try {
            const response = await http().post('api/auth/order', payload);
            return response.data;
        } catch (errors: any) {
            return errors.response.date;
        }
    },
});
