import type { RestaurantRequestInterface } from '~/interface/request/restaurant/restaurant-request.interface';

export const restaurantFormUpdateData = reactive<RestaurantRequestInterface>({
    payload: new FormData(),
});
