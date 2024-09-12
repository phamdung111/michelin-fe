import { http } from '~/utils/http/http';

export const accountUploadRestaurantService = Object.freeze({
    upload: async (payload: FormData) => {
        try {
            const response = await http().post('/api/new-restaurant', payload);
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
});
