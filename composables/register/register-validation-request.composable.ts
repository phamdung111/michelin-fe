import { object, string } from 'yup';
import { registerValidateComposable } from './register-validate.composable';
import * as yup from 'yup';
import { baseFormInputValidation } from '~/validation/base-form-input.validation';
import { registerData } from './register-form-data.composable';

export const registerValidationRequestComposable = async () => {
    const schemaValidate = object().shape({
        name: string().required(),
        email: string().email().required(),
        password: string().required().min(8),
        confirm_password: string()
            .required()
            .min(8)
            .oneOf([yup.ref('password')], 'Password not match'),
    });
    const status = await baseFormInputValidation(schemaValidate, registerValidateComposable, registerData);

    return status;
};
