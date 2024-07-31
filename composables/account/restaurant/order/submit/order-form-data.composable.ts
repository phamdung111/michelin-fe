import type { OrderRequestInterface } from '~/interface/request/order/order-request.interface';

export const orderFormData = reactive<OrderRequestInterface>({
    tableId: null,
    time: '',
    guests: 0,
    roomId: null,
});
