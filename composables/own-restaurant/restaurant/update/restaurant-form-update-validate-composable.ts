import { boolean, object, string } from 'yup';
import { baseFormInputValidation } from '~/validation/base-form-input.validation';
import { restaurantFormUpdateValidation } from './restaurant-form-update-validation.composable';
import { restaurantFormUpdateData } from './restaurant-form-update-data.composable';

export const restaurantFormUpdateValidateComposable = async () => {
    const phoneRegex = /^(?:\+84|0)(?:[3|5|7|8|9])[0-9]{8}$/;
    const schema = object().shape({
        name: string(),
        email: string().email(),
        address: string(),
        phone: string().test('phone', 'invalid phone number', function (phone) {
            if (phone && phone !== '') {
                return phoneRegex.test(phone);
            }
            return true;
        }),
        description: string(),
        allow_booking: boolean(),
    });
    const status = await baseFormInputValidation(schema, restaurantFormUpdateValidation, Object.fromEntries(restaurantFormUpdateData.payload.entries()));
    return status;
};
