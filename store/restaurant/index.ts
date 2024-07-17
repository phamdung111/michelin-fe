import type { RestaurantResponseInterface } from '~/interface/response/restaurant/restaurant-response.interface';
import type { RestaurantsResponseInterface } from '~/interface/response/restaurant/restaurants-response.interface';
import type { restaurantStoreStateInterface } from '~/interface/store/restaurant/restaurant-store-state.interface';

export const useRestaurantStore = defineStore('restaurant', {
    state: (): restaurantStoreStateInterface => {
        return {
            restaurants: [],
            restaurantSelected: null,
            current_page: 0,
            last_page: 0,
            per_page: 0,
            total: 0,
        };
    },
    actions: {
        setRestaurants(restaurants: RestaurantsResponseInterface) {
            this.restaurants = [...restaurants.items];
            this.current_page = restaurants.current_page;
            this.last_page = restaurants.last_page;
            this.per_page = restaurants.per_page;
            this.total = restaurants.total;
        },
        setRestaurantDashboard(restaurants: RestaurantResponseInterface[]) {
            this.restaurants = [...restaurants];
        },
        setRestaurantSelected(restaurant: RestaurantResponseInterface) {
            this.restaurantSelected = restaurant;
        },
    },
});
