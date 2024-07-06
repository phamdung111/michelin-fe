import type { AccountAvatarRequestInterface } from '~/interface/request/account/account-avatar-request.interface';
import type { AccountRequestInterface } from '~/interface/request/account/account-request.interface';
import { http } from '~/utils/http/http';

export const accountService = Object.freeze({
    updateInfo: async (payload: AccountRequestInterface) => {
        try {
            const response = await http().post('/api/auth/update-profile', payload);
            return response.data;
        } catch (error) {}
    },
    updateAvatar: async (payload: AccountAvatarRequestInterface) => {
        try {
            const response = await http().post('api/auth/update-avatar', payload);
            return response.data;
        } catch (error) {}
    },
});
