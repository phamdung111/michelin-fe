import { restaurantService } from '~/service/restaurant/restaurant.service';
import { restaurantFormData } from './restaurant-form-data.composable';
import { restaurantFormValidateComposable } from './restaurant-form-validate-composable';
import { restaurantFormValidation } from './restaurant-form-validation.composable';
import type { RestaurantRequestValidationInterface } from '~/interface/validation/restaurant/restaurant-request-validation.interface';
import { accountRestaurantInitialDataComposable } from '../initial/account-restaurants-initial-data.composable';
import { useUiStore } from '~/store/ui';

export const restaurantFormDataSubmitterComposable = async () => {
    const ui = useUiStore();
    const status = await restaurantFormValidateComposable();
    if (status) {
        const response = await restaurantService.upload(restaurantFormData.payload);
        if (response.errors) {
            for (let key in response.errors) {
                restaurantFormValidation[key as keyof RestaurantRequestValidationInterface].isFailed = true;
                restaurantFormValidation[key as keyof RestaurantRequestValidationInterface].message = response.errors[key][0];
            }
        } else {
            console.log('created');

            await accountRestaurantInitialDataComposable(1);
            ui.closePopup();
        }
    }
};
