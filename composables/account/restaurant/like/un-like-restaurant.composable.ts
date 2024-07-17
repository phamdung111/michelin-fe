import { accountLikeRestaurantService } from '~/service/account/restaurant/like/account-like-restaurant.service';

export const unLikeRestaurantComposable = async (restaurantId: number) => {
    const response = await accountLikeRestaurantService.unLike(restaurantId);
    return response;
};
