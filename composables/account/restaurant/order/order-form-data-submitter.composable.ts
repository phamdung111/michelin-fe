import { accountOrderRestaurantService } from '~/service/account/restaurant/order/account-order-restaurant.service';
import { orderFormData } from './order-form-data.composable';
import { useUiStore } from '~/store/ui';
export const orderFormDataSubmitter = async () => {
    const ui = useUiStore();
    const response = await accountOrderRestaurantService.ordering(orderFormData);
    if (response.status === 'success') {
        ui.openNotification({ status: 'success', message: 'Ordering success' });
        ui.closePopup();
    }
};
