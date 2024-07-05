import { object, string } from 'yup';
import { loginFormData } from './login-form-data.composable';
import { loginValidateComposable } from './login-validate.composable';
import type { LoginValidateInterface } from '../../interface/validation/login-validate.interface';
import { baseFormInputValidation } from '~/validation/base-form-input.validation';

export const loginValidationRequestComposable = async () => {
    const schema = object().shape({
        email: string().email(),
        password: string().min(8),
    });
    const status = await baseFormInputValidation(schema, loginValidateComposable, loginFormData);
    return status;
};
