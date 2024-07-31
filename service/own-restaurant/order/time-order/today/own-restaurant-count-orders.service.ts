import { http } from '~/utils/http/http';

export const ownRestaurantCountOrdersService = Object.freeze({
    countOrderToday: async (): Promise<number> => {
        try {
            const response = await http().post('own-restaurant/count-orders-today');
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
