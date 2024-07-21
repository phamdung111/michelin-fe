import type { RestaurantOrderUpdateStatusInterface } from '~/interface/request/restaurant/order/update/restaurant-order-update-status.interface';
import { accountOrderService } from '~/service/account/order/account-order.service';

export const accountOrderCancelStatusComposable = async (orderId: number) => {
    const response = await accountOrderService.cancelOrder(orderId);
    return response;
};
