import { restaurantService } from '~/service/restaurant/restaurant.service';
import { useUserStore } from '~/store/user';
export const accountRestaurantInitialDataComposable = async (page: Number) => {
    const user = useUserStore();
    const response = await restaurantService.getByUser(page);
    if (response) {
        user.setRestaurants(response);
    }
};
