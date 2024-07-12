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
    restaurants: {
        items: RestaurantResponseInterface[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}
