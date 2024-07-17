import type { RestaurantResponseInterface } from '~/interface/response/restaurant/restaurant-response.interface';

export interface restaurantStoreStateInterface {
    restaurants: RestaurantResponseInterface[];
    restaurantSelected: RestaurantResponseInterface | null;
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
