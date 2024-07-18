import { accountFavoriteService } from '~/service/account/favorite/account-favorite.service';
import { useUserStore } from '~/store/user';
export const accountFavoriteInitialDataComposable = async () => {
    const user = useUserStore();
    const response = await accountFavoriteService.favorites();
    user.setFavorites(response);
};
