import type { OrderRestaurantResponseInterface } from '~/interface/response/restaurant/order/order-restaurant-response.interface';

export interface OrderStoreStateInterface {
    orders: OrderRestaurantResponseInterface[];
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
    countOrderToday: number;
}
