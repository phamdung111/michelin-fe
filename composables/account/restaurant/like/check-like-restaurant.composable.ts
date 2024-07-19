import { accountLikeRestaurantService } from '~/service/account/restaurant/like/account-like-restaurant.service';
import { useUserStore } from '~/store/user';
export const checkLikeRestaurantComposable = async (restaurantId: number) => {
    const user = useUserStore();
    if (user.id) {
        const response = await accountLikeRestaurantService.checkLike(restaurantId);
        return response;
    }
};
