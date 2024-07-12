import { restaurantService } from '~/service/restaurant/restaurant.service';
import { restaurantFormUpdateData } from './restaurant-form-update-data.composable';
import { restaurantFormUpdateValidateComposable } from './restaurant-form-update-validate-composable';
import { useUiStore } from '~/store/ui';
export const restaurantFormUpdateDataSubmitterComposable = async () => {
    const ui = useUiStore();
    const status = await restaurantFormUpdateValidateComposable();

    if (status) {
        const response = await restaurantService.update(restaurantFormUpdateData.payload);
        return response;
    }
    return status;
};
