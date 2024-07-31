import { object, string } from 'yup';
import { registerValidateComposable } from './register-validate.composable';
import * as yup from 'yup';
import { baseFormInputValidation } from '~/validation/base-form-input.validation';
import { registerData } from './register-form-data.composable';

export const registerValidationRequestComposable = async () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const schemaValidate = object().shape({
        name: string().required(),
        email: string().email().required(),
        password: string()
            .required()
            .test('password', 'Password needs at least a special character, a number and a capital letter', function (password) {
                if (password && password !== '') {
                    return passwordRegex.test(password);
                }
                return true;
            }),
        confirm_password: string()
            .required()
            .min(8)
            .oneOf([yup.ref('password')], 'Password not match'),
    });
    const status = await baseFormInputValidation(schemaValidate, registerValidateComposable, registerData);

    return status;
};
