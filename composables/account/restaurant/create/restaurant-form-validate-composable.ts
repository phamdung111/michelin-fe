import { boolean, mixed, number, object, string } from 'yup';
import { baseFormInputValidation } from '~/validation/base-form-input.validation';
import { restaurantFormValidation } from './restaurant-form-validation.composable';
import { restaurantFormData } from './restaurant-form-data.composable';

export const restaurantFormValidateComposable = async () => {
    const phoneRegex = /^(?:\+84|0)(?:[3|5|7|8|9])[0-9]{8}$/;

    const schema = object().shape({
        name: string().required(),
        email: string().email().required(),
        address: string().required(),
        phone: string()
            .required()
            .test('phone', 'invalid phone number', function (phone) {
                if (phone && phone !== '') {
                    return phoneRegex.test(phone);
                }
                return true;
            }),
        totalTables: number().required(),
        description: string().required(),
        allow_booking: boolean(),
        avatar: mixed().required('Avatar is required'),
        image0: mixed().required('File is required'),
    });
    const status = await baseFormInputValidation(schema, restaurantFormValidation, Object.fromEntries(restaurantFormData.payload.entries()));

    return status;
};
