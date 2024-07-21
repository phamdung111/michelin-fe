import type { AccountOrderResponseInterface } from './account-order-response.interface';

export interface AccountOrdersResponseInterface {
    orders: AccountOrderResponseInterface[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
