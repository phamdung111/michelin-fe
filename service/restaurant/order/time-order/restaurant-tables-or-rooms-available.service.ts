import { http } from '~/utils/http/http';

export const restaurantTablesOrRoomsAvailableService = Object.freeze({
    listTableOrRoomRestaurant: async (restaurantId: number, dateTimeOrder: string) => {
        try {
            const response = await http().post('api/tables-or-rooms-by-order-time', {
                restaurantId: restaurantId,
                time: dateTimeOrder,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
