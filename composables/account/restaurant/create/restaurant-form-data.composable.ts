import type { RestaurantRequestInterface } from '~/interface/request/restaurant/restaurant-request.interface';

export const restaurantFormData = reactive<RestaurantRequestInterface>({
    payload: new FormData(),
});
