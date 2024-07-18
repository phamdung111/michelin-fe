import { defineStore } from 'pinia';
import type { restaurantFavoriteResponseInterface } from '~/interface/response/favorite/restaurant-favorite-response.interface';

import type { RestaurantsResponseInterface } from '~/interface/response/restaurant/restaurants-response.interface';
import type { UserStoreStateInterface } from '~/interface/store/user/user-store-state.interface';
export const useUserStore = defineStore('user', {
    state: (): UserStoreStateInterface => {
        return {
            id: 0,
            name: '',
            email: '',
            location: '',
            avatar: '',
            role: '',
            phone: '',
            description: '',
            restaurants: {
                items: [],
                current_page: 0,
                last_page: 0,
                per_page: 0,
                total: 0,
            },
            favorites: [],
        };
    },
    actions: {
        setUser(user: UserStoreStateInterface) {
            this.id = user.id;
            this.name = user.name;
            this.email = user.email;
            this.location = user.location;
            this.avatar = user.avatar;
            this.role = user.role;
            this.phone = user.phone;
            this.description = user.description;
        },
        resetUser() {
            this.id = 0;
            this.name = '';
            this.email = '';
            this.location = '';
            this.avatar = '';
            this.role = '';
            this.phone = '';
            this.description = '';
        },
        setRestaurants(restaurants: RestaurantsResponseInterface) {
            this.restaurants.items = [...restaurants.items];
            this.restaurants.items = restaurants.items;
            this.restaurants.current_page = restaurants.current_page;
            this.restaurants.last_page = restaurants.last_page;
            this.restaurants.per_page = restaurants.per_page;
            this.restaurants.total = restaurants.total;
        },
        setFavorites(favorites: restaurantFavoriteResponseInterface[]) {
            this.favorites = [...favorites];
        },
    },
});
