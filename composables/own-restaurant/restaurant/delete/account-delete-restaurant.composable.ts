import { ownDeleteRestaurantService } from '~/service/own-restaurant/restaurant/delete/own-delete-restaurant.service';

export const ownDeleteRestaurantComposable = (restaurantId: Number) => {
    const response = ownDeleteRestaurantService.delete(restaurantId);
    return response;
};
