import type { AccountOrderResponseInterface } from '~/interface/response/account/order/account-order-response.interface';
import { http } from '~/utils/http/http';

export const accountOrderService = Object.freeze({
    orders: async (): Promise<AccountOrderResponseInterface[]> => {
        try {
            const response = await http().post('api/auth/orders-user');
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
