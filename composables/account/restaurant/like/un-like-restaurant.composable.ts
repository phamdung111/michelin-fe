import { likeRestaurantService } from '~/service/restaurant/like-restaurant.service';

export const unLikeRestaurantComposable = async (restaurantId: number) => {
    const response = await likeRestaurantService.unLike(restaurantId);
    return response;
};
