import { adminRestaurantService } from '~/service/admin/restaurant/admin-restaurant.service';
import { useRestaurantStore } from '~/store/restaurant';
export const adminRestaurantsInitialData = async (page: Number) => {
    const restaurant = useRestaurantStore();
    const response = await adminRestaurantService.restaurants(page);
    if (response) {
        restaurant.setRestaurants(response);
    }
};
