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
            refresh_token: '',
            login_source: '',
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
            this.refresh_token = auth.refresh_token;
            this.login_source = auth.login_source;
        },
        removeAuthentication() {
            this.access_token = '';
            this.expires_in = 0;
            this.token_type = '';
            this.refresh_token = '';
            this.login_source = '';
            useUserStore().resetUser();
        },
        setAccessToken(newToken: string) {
            this.access_token = newToken;
        },
    },
    persist: {
        storage: persistedState.localStorage,
    },
});
