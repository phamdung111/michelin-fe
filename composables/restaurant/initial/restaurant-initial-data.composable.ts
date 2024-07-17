import { restaurantService } from '~/service/restaurant/restaurant.service';
import { useRestaurantStore } from '~/store/restaurant';
export const restaurantInitialDataComposable = async (restaurantId: Number) => {
    const restaurant = useRestaurantStore();
    const response = await restaurantService.restaurantById(restaurantId);
    restaurant.setRestaurantSelected(response);
};
