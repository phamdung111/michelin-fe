import { authenticationService } from '~/service/authentication/authentication.service';
import { useUserStore } from '~/store/user';
export const authenticationComposable = async () => {
    const auth = useUserStore();
    const response = await authenticationService.getInformationUser();
    if (response) {
        auth.setUser(response);
    }
};
