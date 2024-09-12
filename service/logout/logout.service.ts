import { http } from '~/utils/http/http';

export const logoutService = Object.freeze({
    logout: async () => {
        try {
            const response = await http().post('/api/logout');
            return response.status;
        } catch (error) {}
    },
});
