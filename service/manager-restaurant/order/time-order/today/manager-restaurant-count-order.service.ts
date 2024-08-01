import { http } from '~/utils/http/http';

export const managerRestaurantCountOrderService = Object.freeze({
    managerCountOrder: async (): Promise<number> => {
        try {
            const response = await http().post('manager/count-orders-today');
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
});
