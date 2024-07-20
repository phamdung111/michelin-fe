export interface RestaurantFavoriteResponseInterface {
    id: number;
    restaurant: RestaurantFavoriteResponse;
}

interface RestaurantFavoriteResponse {
    id: number;
    name: string;
    address: string;
    description: string;
    images: string[];
}
