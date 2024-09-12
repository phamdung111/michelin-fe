import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import { useAuthenticationStore } from '~/store/authentication';
import { authenticationService } from '~/service/authentication/authentication.service';
export default defineNuxtRouteMiddleware(async (to, from) => {
    const response = await authenticationService.getInformationUser();
    const ui = useUiStore();
    const auth = useAuthenticationStore();
    const user = useUserStore();
    console.log(response);

    if (response?.role! !== 'own') {
        return navigateTo('/');
    }
});
