import type { RestaurantResponseInterface } from '~/interface/response/restaurant/restaurant-response.interface';
import { http } from '~/utils/http/http';

export const restaurantService = Object.freeze({
    restaurants: async (): Promise<RestaurantResponseInterface[]> => {
        try {
            const response = await http().get('/api/restaurants');
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
