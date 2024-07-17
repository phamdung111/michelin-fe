import { accountInitialRestaurantService } from '~/service/account/restaurant/initial/account-initial-restaurants.service';
import { useUserStore } from '~/store/user';
export const accountRestaurantInitialDataComposable = async (page: Number) => {
    const user = useUserStore();
    const response = await accountInitialRestaurantService.getByUser(page);
    if (response) {
        user.setRestaurants(response);
    }
};
