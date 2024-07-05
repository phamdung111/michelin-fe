import { http } from '~/utils/http/http';
import type { UserStoreStateInterface } from '~/interface/store/user/user-store-state.interface';

export const authenticationService = Object.freeze({
    getInformationUser: async (): Promise<UserStoreStateInterface | undefined> => {
        try {
            const response = await http().post('/api/auth/profile');
            return response.data;
        } catch (error) {}
    },
});
