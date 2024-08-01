export interface AccountOrderResponseInterface {
    id: number;
    time: Date;
    status: string;
    tableNumber: number | null;
    roomNumber: number | null;
    restaurant: AccountOrderRestaurantResponseInterface[];
}

interface AccountOrderRestaurantResponseInterface {
    id: string;
    name: string;
    phone: string;
    address: string;
    avatar: string;
}
