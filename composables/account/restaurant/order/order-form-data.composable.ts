import type { OrderRequestInterface } from '~/interface/request/order/order-request.interface';

export const orderFormData = reactive<OrderRequestInterface>({
    restaurantId: 0,
    time: '',
    guests: 0,
});
