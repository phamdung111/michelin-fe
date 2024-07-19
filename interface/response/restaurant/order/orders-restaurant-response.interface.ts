import type { OrderRestaurantResponseInterface } from './order-restaurant-response.interface';

export interface OrdersRestaurantResponseInterface {
    orders: OrderRestaurantResponseInterface[];
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
}
