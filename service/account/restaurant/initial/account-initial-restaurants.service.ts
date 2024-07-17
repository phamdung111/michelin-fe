import type { RestaurantsResponseInterface } from '~/interface/response/restaurant/restaurants-response.interface';
import { http } from '~/utils/http/http';

export const accountInitialRestaurantService = Object.freeze({
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
});
