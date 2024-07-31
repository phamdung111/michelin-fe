import type { RestaurantsResponseInterface } from '~/interface/response/restaurant/restaurants-response.interface';
import { http } from '~/utils/http/http';

export const ownInitialRestaurantService = Object.freeze({
    getByOwn: async (page: Number): Promise<RestaurantsResponseInterface | undefined> => {
        try {
            const response = await http().post('own-restaurant/restaurants-by-own', {
                page: page,
            });
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
});
