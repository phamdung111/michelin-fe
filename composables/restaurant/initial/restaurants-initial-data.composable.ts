import { restaurantService } from '~/service/restaurant/restaurant.service';
import { useRestaurantStore } from '~/store/restaurant';
export const restaurantsInitialDataComposable = async (perPage: number, page: number) => {
    const restaurant = useRestaurantStore();
    const response = await restaurantService.restaurants(perPage, page);
    restaurant.setRestaurants(response);
};
