import { logoutService } from '~/service/logout/logout.service';
import { useAuthenticationStore } from '~/store/authentication';
import { useUiStore } from '~/store/ui';
export const logoutSubmitter = async () => {
    const ui = useUiStore();
    const auth = useAuthenticationStore();
    const status = await logoutService.logout();
    if (status === 200) {
        auth.removeAuthentication();
        ui.closeMenu();
    } else {
        ui.openNotification({ status: 'error', message: 'something went wrong' });
    }
};
