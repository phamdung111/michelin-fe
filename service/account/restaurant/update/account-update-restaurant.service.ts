import { http } from '~/utils/http/http';

export const accountUpdateRestaurantService = Object.freeze({
    update: async (payload: FormData) => {
        try {
            const response = await http().post('/api/auth/update-restaurant', payload);
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
});
