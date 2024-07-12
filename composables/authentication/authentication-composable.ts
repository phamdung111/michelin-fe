import { authenticationService } from '~/service/authentication/authentication.service';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import LoginForm from '~/components/form/login-form/LoginForm.vue';
export const authenticationComposable = async () => {
    const ui = useUiStore();
    const auth = useUserStore();
    const response = await authenticationService.getInformationUser();
    if (response) {
        auth.setUser(response);
    } else {
        ui.openPopup(LoginForm);
    }
};
