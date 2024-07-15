import { likeRestaurantService } from '~/service/restaurant/like-restaurant.service';

export const likeRestaurantComposable = async (restaurantId: number) => {
    const response = await likeRestaurantService.like(restaurantId);
    return response;
};
