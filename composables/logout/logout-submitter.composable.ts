import LoginForm from '~/components/form/login-form/LoginForm.vue';
import { logoutService } from '~/service/logout/logout.service';
import { useAuthenticationStore } from '~/store/authentication';
import { useUiStore } from '~/store/ui';
export const logoutSubmitter = async () => {
    console.log('logout');
    
    const ui = useUiStore();
    const auth = useAuthenticationStore();
    const status = await logoutService.logout();
    if (status === 200) {
        auth.removeAuthentication();
        ui.closeMenu();
        ui.openPopup(LoginForm);
    } else {
        ui.openNotification({ status: 'error', message: 'something went wrong' });
    }
};
