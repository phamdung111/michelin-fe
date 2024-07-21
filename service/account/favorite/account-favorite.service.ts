import type { RestaurantFavoriteResponseInterface } from '~/interface/response/favorite/restaurant-favorite-response.interface';
import { http } from '~/utils/http/http';

export const accountFavoriteService = Object.freeze({
    favorites: async (): Promise<RestaurantFavoriteResponseInterface[]> => {
        try {
            const response = await http().post('api/auth/favorites');
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
