import { defineStore } from 'pinia';
import type { AccountOrdersResponseInterface } from '~/interface/response/account/order/account-orders-response.interface';
import type { RestaurantFavoriteResponseInterface } from '~/interface/response/favorite/restaurant-favorite-response.interface';

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
            orders: {
                orders: [],
                current_page: 0,
                last_page: 0,
                per_page: 0,
                total: 0,
            },
        };
    },
    getters: {
        isUser: (state) => {
            return state.role === 'user';
        },
        isOwn: (state) => {
            return state.role === 'own';
        },
        isManager: (state) => {
            return state.role === 'manager';
        },
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
            this.restaurants.current_page = restaurants.current_page;
            this.restaurants.last_page = restaurants.last_page;
            this.restaurants.per_page = restaurants.per_page;
            this.restaurants.total = restaurants.total;
        },
        clearRestaurants() {
            this.restaurants.items = [];
            this.restaurants.current_page = 0;
            this.restaurants.last_page = 0;
            this.restaurants.per_page = 0;
            this.restaurants.total = 0;
        },
        setFavorites(favorites: RestaurantFavoriteResponseInterface[]) {
            this.favorites = [...favorites];
        },
        setOrders(orders: AccountOrdersResponseInterface) {
            this.orders.orders = [...orders.orders];
            this.orders.current_page = orders.current_page;
            this.orders.last_page = orders.last_page;
            this.orders.per_page = orders.per_page;
            this.orders.total = orders.total;
        },
    },
});
