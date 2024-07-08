import { loginService } from '~/service/login/login.service';
import { loginFormData } from './login-form-data.composable';
import { useAuthenticationStore } from '~/store/authentication';
import { loginValidationRequestComposable } from './login-validation-request.composable';
import { authenticationComposable } from '../authentication/authentication-composable';
import { loginValidateComposable } from './login-validate.composable';
import { useUiStore } from '~/store/ui';
export const loginDataSubmitterComposable = async () => {
    const auth = useAuthenticationStore();
    const ui = useUiStore();
    const status = await loginValidationRequestComposable();

    if (status) {
        const response = await loginService.login(loginFormData);
        if (response) {
            auth.setAuthentication(response);
            await authenticationComposable();
            ui.closeOverlay();
        } else {
            loginValidateComposable.loginError.isFailed = true;
            loginValidateComposable.loginError.message = 'Login information is incorrect';
        }
    }
};
