import type { RestaurantResponseInterface } from '~/interface/response/restaurant/restaurant-response.interface';
import type { RestaurantsResponseInterface } from '~/interface/response/restaurant/restaurants-response.interface';
import type { restaurantStoreStateInterface } from '~/interface/store/restaurant/restaurant-store-state.interface';
import type { CommentResponseInterface, CommentRestaurantResponseInterface } from '../../interface/response/restaurant/comment/comment-restaurant-response.interface';

export const useRestaurantStore = defineStore('restaurant', {
    state: (): restaurantStoreStateInterface => {
        return {
            restaurants: [],
            restaurantSelected: {
                restaurant: null,
                comments: {
                    items: [],
                    total: 0,
                },
            },
            current_page: 0,
            last_page: 0,
            per_page: 0,
            total: 0,
        };
    },
    getters: {
        isFullComment: (state) => {
            return state.restaurantSelected.comments.items.length >= state.restaurantSelected.comments.total;
        },
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
            this.restaurantSelected.restaurant = restaurant;
        },
        newComment(comments: CommentResponseInterface) {
            this.restaurantSelected.comments.items.unshift(comments);
        },
        setCommentRestaurantSelected(comments: CommentRestaurantResponseInterface) {
            comments.comments.forEach((comment) => this.restaurantSelected.comments.items.push(comment));
            this.restaurantSelected.comments.total = comments.total;
        },
        hiddenCommentRestaurantSelected(keepItems: number) {
            this.restaurantSelected.comments.items = this.restaurantSelected.comments.items.slice(0, keepItems);
        },
        deleteComment(id: number) {
            const index = this.restaurantSelected.comments.items.findIndex((item) => item.id === id);
            this.restaurantSelected.comments.items.splice(index, 1);
            this.restaurantSelected.comments.total -= 1;
        },
        editComment(id: number, content: string) {
            this.restaurantSelected.comments.items.forEach((item) => {
                item.id === id ? (item.content = content) : '';
            });
        },
    },
});
