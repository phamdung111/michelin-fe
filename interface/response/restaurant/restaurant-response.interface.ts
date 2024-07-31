import { avatar } from '@nuxt/ui';
export interface RestaurantResponseInterface {
    id: number;
    name: string;
    status: string;
    address: string;
    phone: string;
    email: string;
    description: string;
    allow_booking: boolean;
    createdAt: Date;
    avatar: string;
    images: Image[];
    tables: Table[];
    rooms: Room[];
    manager: Manager | null;
    countLike: number;
}
interface Image {
    id: number;
    image: string;
}
interface Table {
    id: number;
    tableNumber: number;
    description: string;
}

interface Room {
    id: number;
    roomNumber: number;
}
interface Manager {
    id: number | null;
    name: string | null;
    email: string | null;
    avatar: string | null;
    phone: string | null;
}
