import type { AccountRequestInterface } from '~/interface/request/account/account-request.interface';
import { http } from '~/utils/http/http';

export const updateAccountService = Object.freeze({
    updateInfo: async (payload: AccountRequestInterface) => {
        try {
            const response = await http().post('/api/update-profile', payload);
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
    updateAvatar: async (payload: FormData) => {
        try {
            const response = await http().post('api/update-avatar', payload);
            return response.data;
        } catch (error) {}
    },
});
