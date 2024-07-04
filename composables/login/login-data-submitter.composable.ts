import { loginService } from '~/service/login/login.service';
import { loginFormData } from './login-form-data.composable';
import { useAuthenticationStore } from '~/store/authentication';
import { loginValidationRequestComposable } from './login-validation-request.composable';
export const loginDataSubmitterComposable = async () => {
    const auth = useAuthenticationStore();
    const status = await loginValidationRequestComposable();

    if (status) {
        const response = await loginService.login(loginFormData);
        if (response) {
            auth.setAuthentication(response);
        }
    }
};
