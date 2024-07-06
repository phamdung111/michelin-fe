import { baseFormInputValidation } from '~/validation/base-form-input.validation';
import { accountFormValidationComposable } from './account-form-validation.composable';
import { accountFormData } from './account-form.-data.composable';
import * as yup from 'yup';
import * as yub from 'yup';

export const accountValidateComposable = async () => {
    let status = true;
    const phoneRegex = /^(?:\+84|0)(?:[3|5|7|8|9])[0-9]{8}$/;
    const schema = yup.object().shape({
        description: yup.string(),
        email: yup.string().email().required(),
        name: yup.string().required(),
        phone: yup.string().test('phone', 'invalid phone number', function (phone) {
            if (phone && phone !== '') {
                return phoneRegex.test(phone);
            }
            return true;
        }),
        currentPassword: yub.string(),
        newPassword: yup.string(),
        repeatPassword: yup.string(),
    });

    status = await baseFormInputValidation(schema, accountFormValidationComposable, accountFormData);
    return status;
};
