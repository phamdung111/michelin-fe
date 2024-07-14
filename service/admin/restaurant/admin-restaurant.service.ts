import type { RestaurantsResponseInterface } from '~/interface/response/restaurant/restaurants-response.interface';
import { http } from '~/utils/http/http';

export const adminRestaurantService = Object.freeze({
    restaurants: async (page: Number): Promise<RestaurantsResponseInterface | undefined> => {
        try {
            const response = await http().get(`admin/restaurants?page=${page}`);
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    permissionRestaurants: async (payload: Record<number, string>) => {
        try {
            const response = await http().post('admin/permission-restaurants', payload);
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
