import { accountLikeRestaurantService } from '~/service/account/restaurant/like/account-like-restaurant.service';

export const checkLikeRestaurantComposable = async (restaurantId: number) => {
    const response = await accountLikeRestaurantService.checkLike(restaurantId);
    return response;
};
