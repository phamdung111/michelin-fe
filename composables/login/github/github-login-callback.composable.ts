import { loginService } from '~/service/login/login.service';
import { useAuthenticationStore } from '~/store/authentication';
export const githubLoginCallbackComposable = async (code: string) => {
    const auth = useAuthenticationStore();
    const response = await loginService.githubCallback(code);
    auth.setAuthentication(response);
    return response ? true : false;
};
