import type { RestaurantResponseInterface } from '~/interface/response/restaurant/restaurant-response.interface';
import { http } from '~/utils/http/http';

export const dashboardRestaurantService = Object.freeze({
    restaurants: async (): Promise<RestaurantResponseInterface[]> => {
        try {
            const response = await http().get('/api/restaurants');
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
