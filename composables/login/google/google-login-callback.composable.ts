import { loginService } from '~/service/login/login.service';
import { useAuthenticationStore } from '~/store/authentication';
export const googleLoginCallbackComposable = async (code: string) => {
    const auth = useAuthenticationStore();
    const response = await loginService.googleCallback(code);
    auth.setAuthentication(response);
    
    return response ? true : false;
};
