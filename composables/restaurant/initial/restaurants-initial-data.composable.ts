import { restaurantService } from '~/service/restaurant/restaurant.service';
import { useRestaurantStore } from '~/store/restaurant';
export const restaurantsInitialDataComposable = async () => {
    const restaurant = useRestaurantStore();
    const response = await restaurantService.restaurants();
    restaurant.setRestaurantDashboard(response);
};
