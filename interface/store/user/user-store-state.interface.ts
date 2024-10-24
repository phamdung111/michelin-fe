import type { AccountOrderResponseInterface } from '~/interface/response/account/order/account-order-response.interface';
import type { RestaurantFavoriteResponseInterface } from '~/interface/response/favorite/restaurant-favorite-response.interface';
import type { RestaurantResponseInterface } from '~/interface/response/restaurant/restaurant-response.interface';

export interface UserStoreStateInterface {
    id: number;
    name: string;
    email: string;
    location: string;
    avatar: string;
    role: string;
    phone: string;
    description: string;
    channels: string[];
    restaurants: {
        items: RestaurantResponseInterface[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    favorites: RestaurantFavoriteResponseInterface[];
    orders: {
        orders: AccountOrderResponseInterface[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}
