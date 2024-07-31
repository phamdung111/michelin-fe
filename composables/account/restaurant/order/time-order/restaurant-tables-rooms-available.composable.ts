import { restaurantTablesOrRoomsAvailableService } from '~/service/restaurant/order/time-order/restaurant-tables-or-rooms-available.service';

export const restaurantTablesRoomsAvailableComposable = (restaurantId: number, dateTimeOrder: string) => {
    const response = restaurantTablesOrRoomsAvailableService.listTableOrRoomRestaurant(restaurantId, dateTimeOrder);
    return response;
};
