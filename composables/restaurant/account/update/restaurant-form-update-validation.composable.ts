import type { RestaurantRequestUpdateValidationInterface } from '~/interface/validation/restaurant/restaurant-request-update-validation.interface';

export const restaurantFormUpdateValidation = reactive<RestaurantRequestUpdateValidationInterface>({
    name: {
        isFailed: false,
        message: '',
    },
    email: {
        isFailed: false,
        message: '',
    },
    address: {
        isFailed: false,
        message: '',
    },
    phone: {
        isFailed: false,
        message: '',
    },
    description: {
        isFailed: false,
        message: '',
    },
    allow_booking: {
        isFailed: false,
        message: '',
    },
});
