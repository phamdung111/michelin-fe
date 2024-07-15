import { dashboardRestaurantService } from '~/service/dashboard/restaurant/dashboard-restaurant.service';
import { useRestaurantStore } from '~/store/restaurant';
export const dashboardRestaurantsInitialDataComposable = async () => {
    const restaurant = useRestaurantStore();
    const response = await dashboardRestaurantService.restaurants();
    restaurant.setRestaurantDashboard(response);
};
