import { accountOrderService } from '~/service/account/order/account-order.service';
import { useUserStore } from '~/store/user';
export const accountOrderInitialDataComposable = async () => {
    const user = useUserStore();
    const response = await accountOrderService.orders();
    user.setOrders(response);
};
