import { http } from '~/utils/http/http';

export const accountDeleteRestaurantService = Object.freeze({
    delete: async (restaurantId: Number) => {
        try {
            const response = await http().post('api/auth/delete-restaurant', {
                restaurantId: restaurantId,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
