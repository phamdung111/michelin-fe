import type { RestaurantResponseInterface } from '~/interface/response/restaurant/restaurant-response.interface';
import type { RestaurantsResponseInterface } from '~/interface/response/restaurant/restaurants-response.interface';
import { http } from '~/utils/http/http';

export const restaurantService = Object.freeze({
    restaurants: async (perPage: number, page: number): Promise<RestaurantsResponseInterface> => {
        try {
            const response = await http().post('/api/restaurants', {
                perPage: perPage,
                page: page,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    restaurantById: async (restaurantId: Number): Promise<RestaurantResponseInterface> => {
        try {
            const response = await http().get(`/api/restaurant/${restaurantId}`);
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
