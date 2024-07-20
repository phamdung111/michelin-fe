import { accountDeleteRestaurantService } from '~/service/account/restaurant/delete/account-delete-restaurant.service';

export const accountDeleteRestaurantComposable = (restaurantId: Number) => {
    const response = accountDeleteRestaurantService.delete(restaurantId);
    return response;
};
