import type { RestaurantRequestValidationInterface } from '~/interface/validation/restaurant/restaurant-request-validation.interface';

export const restaurantFormValidation = reactive<RestaurantRequestValidationInterface>({
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
    avatar: {
        isFailed: false,
        message: '',
    },
    image0: {
        isFailed: false,
        message: '',
    },
    totalTables: {
        isFailed: false,
        message: '',
    },
});
