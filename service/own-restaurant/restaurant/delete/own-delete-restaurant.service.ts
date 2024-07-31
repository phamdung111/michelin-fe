import { http } from '~/utils/http/http';

export const ownDeleteRestaurantService = Object.freeze({
    delete: async (restaurantId: Number) => {
        try {
            const response = await http().post('own-restaurant/delete-restaurant', {
                restaurantId: restaurantId,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
