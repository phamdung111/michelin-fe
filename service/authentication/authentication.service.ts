import { http } from '~/utils/http/http';
import { useAuthenticationStore } from '~/store/authentication';
import type { UserStoreStateInterface } from '~/interface/store/user/user-store-state.interface';

export const authenticationService = Object.freeze({
    getInformationUser: async (): Promise<UserStoreStateInterface | undefined> => {
        const auth = useAuthenticationStore();
        try {
            const response = await http().post('/api/auth/profile', {
                headers: {
                    Authorization: `Bearer ${auth.access_token}`,
                },
            });
            return response.data;
        } catch (error) {}
    },
});
