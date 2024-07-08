import { defineStore } from 'pinia';
import type { AuthenticationResponseInterface } from '~/interface/response/authentication/authentication-response.interface';
import type { AuthenticationStoreStateInterface } from '~/interface/store/authentication/authentication-store-state.interface';
import { useUserStore } from '../user';
export const useAuthenticationStore = defineStore('auth', {
    state: (): AuthenticationStoreStateInterface => {
        return {
            access_token: '',
            expires_in: 0,
            token_type: '',
        };
    },
    getters: {
        isLogin: (state) => state.access_token !== '',
    },
    actions: {
        setAuthentication(auth: AuthenticationResponseInterface) {
            this.access_token = auth.access_token;
            this.expires_in = auth.expires_in;
            this.token_type = auth.token_type;
        },
        removeAuthentication() {
            this.access_token = '';
            this.expires_in = 0;
            this.token_type = '';
            useUserStore().resetUser();
        },
    },
    persist: {
        storage: persistedState.localStorage,
    },
});
