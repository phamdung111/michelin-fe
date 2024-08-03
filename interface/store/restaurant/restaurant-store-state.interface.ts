import type { CommentResponseInterface, CommentRestaurantResponseInterface } from '~/interface/response/restaurant/comment/comment-restaurant-response.interface';
import type { RestaurantResponseInterface } from '~/interface/response/restaurant/restaurant-response.interface';

export interface restaurantStoreStateInterface {
    restaurants: RestaurantResponseInterface[] | [];
    restaurantSelected: {
        restaurant: RestaurantResponseInterface | null;
        comments: {
            items: CommentResponseInterface[];
            total: number;
        };
    };
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
