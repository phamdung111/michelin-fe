import type { RestaurantsResponseInterface } from '~/interface/response/restaurant/restaurants-response.interface';
import { http } from '~/utils/http/http';

export const restaurantService = Object.freeze({
    upload: async (payload: FormData) => {
        try {
            const response = await http().post('/api/auth/new-restaurant', payload);
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
    getByUser: async (page: Number): Promise<RestaurantsResponseInterface | undefined> => {
        try {
            const response = await http().post('/api/auth/restaurant-by-user', {
                page: page,
            });
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
    update: async (payload: FormData) => {
        try {
            const response = await http().post('/api/auth/update-restaurant', payload);
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
});
