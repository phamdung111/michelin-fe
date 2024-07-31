import type { NotFoundResponseInterface } from '~/interface/response/not-found/not-found-response.interface';
import type { RestaurantCheckManagerInterface } from '~/interface/response/restaurant/check-manager/restaurant-check-manager.interface';
import { http } from '~/utils/http/http';

export const ownRestaurantUpdateRestaurantService = Object.freeze({
    update: async (payload: FormData) => {
        try {
            const response = await http().post('own-restaurant/update-restaurant', payload);
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
    checkManger: async (email: string, restaurantId: number): Promise<RestaurantCheckManagerInterface | NotFoundResponseInterface> => {
        try {
            const response = await http().post('/own-restaurant/check-manager', {
                email: email,
                restaurantId: restaurantId,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
