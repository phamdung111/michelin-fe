import { restaurantService } from '~/service/restaurant/restaurant.service';
import { useRestaurantStore } from '~/store/restaurant';
import { useUiStore } from '~/store/ui';
export const restaurantsInitialDataComposable = async (perPage: number, page: number) => {
    const restaurant = useRestaurantStore();
    const ui = useUiStore();
    ui.isLoading = true;
    const response = await restaurantService.restaurants(perPage, page);
    if (response) {
        restaurant.setRestaurants(response);
        ui.isLoading = false;
    }
};
