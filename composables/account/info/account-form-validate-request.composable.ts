import { baseFormInputValidation } from '~/validation/base-form-input.validation';
import { accountFormValidationComposable } from './account-form-validation.composable';
import { accountFormData } from './account-form.-data.composable';
import { object, string } from 'yup';

export const accountValidateRequestComposable = async () => {
    let status = true;
    const phoneRegex = /^(?:\+84|0)(?:[3|5|7|8|9])[0-9]{8}$/;
    const schema = object().shape({
        description: string().nullable(),
        email: string().email().required(),
        name: string().required(),
        phone: string()
            .nullable()
            .test('phone', 'invalid phone number', function (phone) {
                if (phone && phone !== '') {
                    return phoneRegex.test(phone);
                }
                return true;
            }),
        currentPassword: string(),
        newPassword: string(),
        repeatPassword: string(),
    });

    status = await baseFormInputValidation(schema, accountFormValidationComposable, accountFormData);

    return status;
};
