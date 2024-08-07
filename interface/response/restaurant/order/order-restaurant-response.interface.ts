import { avatar } from '@nuxt/ui';
export interface OrderRestaurantResponseInterface {
    id: number;
    guests: number;
    status: string;
    order_time: Date;
    restaurant: {
        id: number;
        name: string;
        address: string;
        phone: string;
        avatar: string;
    };
    userOrdered: {
        id: number;
        name: string;
        email: string;
        phone: string;
        location: string;
        avatar: string;
    };
}
