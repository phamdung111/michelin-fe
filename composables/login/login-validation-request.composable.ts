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
    // try {
    //     await schema.validate(loginFormData, { abortEarly: false });
    // } catch (errors: any) {
    //     errors.inner.forEach((err: any) => {
    //         loginValidateComposable[err.path as keyof LoginValidateInterface].isFailed = true;
    //         loginValidateComposable[err.path as keyof LoginValidateInterface].message = err.message;
    //     });
    //     status = false;
    // }

    return status;
};
