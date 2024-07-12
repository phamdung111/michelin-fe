import type { RestaurantResponseInterface } from './restaurant-response.interface';

export interface RestaurantsResponseInterface {
    items: RestaurantResponseInterface[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
