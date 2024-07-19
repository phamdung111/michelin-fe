import type { OrdersRestaurantResponseInterface } from '~/interface/response/restaurant/order/orders-restaurant-response.interface';
import type { OrderStoreStateInterface } from '~/interface/store/order/order-store-state.interface';

export const useOrderStore = defineStore('order', {
    state: (): OrderStoreStateInterface => {
        return {
            orders: [],
            current_page: 0,
            per_page: 0,
            total: 0,
            last_page: 0,
            countOrderToday: 0,
        };
    },
    actions: {
        setOrders(orders: OrdersRestaurantResponseInterface) {
            this.orders = [...orders.orders];
            this.current_page = orders.current_page;
            this.per_page = orders.per_page;
            this.total = orders.total;
            this.last_page = orders.last_page;
        },
        setCountOrdersToday(number: number) {
            this.countOrderToday = number;
        },
    },
});
