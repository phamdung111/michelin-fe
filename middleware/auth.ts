import { authenticationComposable } from '~/composables/authentication/authentication-composable';
import { useAuthenticationStore } from '../store/authentication/index';
export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthenticationStore();

    if (auth.access_token) {
        authenticationComposable();
    }
});
