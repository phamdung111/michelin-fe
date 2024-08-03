import type { AccountGetterCommentsRequestInterface } from '~/interface/request/account/comment/account-getter-comments-request.interface';
import { restaurantCommentService } from '~/service/restaurant/comment/restaurant-comment.service';
import { useRestaurantStore } from '../../../store/restaurant/index';
export const restaurantCommentsGetterComposable = async (headers: AccountGetterCommentsRequestInterface) => {
    const restaurant = useRestaurantStore();
    const response = await restaurantCommentService.listComment(headers);
    if (response) {
        restaurant.setCommentRestaurantSelected(response!);
    }
};
