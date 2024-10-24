import { registerService } from '~/service/register/register.service';
import { registerValidationRequestComposable } from './register-validation-request.composable';
import { registerRequestMapper } from '~/mapper/request/register/register-request.mapper';
import { registerValidateComposable } from './register-validate.composable';
import type { RegisterValidateInterFace } from '~/interface/validation/register-validate.interface';
import { useAuthenticationStore } from '~/store/authentication';
import { authenticationComposable } from '../authentication/authentication-composable';
import { useUiStore } from '~/store/ui';
export const registerDataSubmitterComposable = async () => {
    const auth = useAuthenticationStore();
    const ui = useUiStore();
    const status = await registerValidationRequestComposable();
    if (status) {
        const response = await registerService.register(registerRequestMapper());
        if (response.errors) {
            for (let key in response.errors) {
                registerValidateComposable[key as keyof RegisterValidateInterFace].isFailed = true;
                registerValidateComposable[key as keyof RegisterValidateInterFace].message = response.errors[key][0];
            }
        } else {
            auth.setAuthentication(response);
            await authenticationComposable();
            ui.closePopup();
        }
    }
};
