export interface AccountOrderResponseInterface {
    id: number;
    time: Date;
    status: string;
    restaurant: AccountOrderRestaurantResponseInterface[];
}

interface AccountOrderRestaurantResponseInterface {
    id: string;
    name: string;
    phone: string;
    address: string;
    image: string[];
}
