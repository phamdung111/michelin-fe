import { likeRestaurantService } from '~/service/restaurant/like-restaurant.service';

export const checkLikeRestaurantComposable = async (restaurantId: number) => {
    const response = await likeRestaurantService.checkLike(restaurantId);
    return response;
};
