import { accountLikeRestaurantService } from '~/service/account/restaurant/like/account-like-restaurant.service';

export const likeRestaurantComposable = async (restaurantId: number) => {
    const response = await accountLikeRestaurantService.like(restaurantId);
    return response;
};
