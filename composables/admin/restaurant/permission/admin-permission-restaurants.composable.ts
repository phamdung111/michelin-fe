import { adminRestaurantService } from '~/service/admin/restaurant/admin-restaurant.service';
import { useUiStore } from '~/store/ui';
export const adminPermissionRestaurantComposable = async (payload: Record<number, string>) => {
    const ui = useUiStore();
    const response = await adminRestaurantService.permissionRestaurants(payload);
    return response;
};
