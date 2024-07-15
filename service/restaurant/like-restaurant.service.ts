import { http } from '~/utils/http/http';

export const likeRestaurantService = Object.freeze({
    checkLike: async (restaurantId: number): Promise<boolean> => {
        try {
            const response = await http().post('/api/auth/check', {
                restaurantId: restaurantId,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    like: async (restaurantId: number): Promise<boolean> => {
        try {
            const response = await http().post('/api/auth/like', {
                restaurantId: restaurantId,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    unLike: async (restaurantId: number): Promise<boolean> => {
        try {
            const response = await http().post('/api/auth/un-like', {
                restaurantId: restaurantId,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
