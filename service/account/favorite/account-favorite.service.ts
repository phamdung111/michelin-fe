import type { FavoriteResponseInterface } from '~/interface/response/favorite/favorite-response.interface';
import { http } from '~/utils/http/http';

export const accountFavoriteService = Object.freeze({
    favorites: async (): Promise<FavoriteResponseInterface[]> => {
        try {
            const response = await http().post('api/auth/favorites');
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
