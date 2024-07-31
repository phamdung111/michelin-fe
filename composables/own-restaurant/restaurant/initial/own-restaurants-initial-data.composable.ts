import { ownInitialRestaurantService } from '~/service/own-restaurant/restaurant/initial/own-initial-restaurants.service';
import { useUserStore } from '~/store/user';
export const ownRestaurantInitialDataComposable = async (page: Number) => {
    const user = useUserStore();
    const response = await ownInitialRestaurantService.getByOwn(page);
    if (response) {
        user.setRestaurants(response);
    } else {
        user.clearRestaurants();
    }
};
