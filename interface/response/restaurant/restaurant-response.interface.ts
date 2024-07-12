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
    images: Image[];
}
interface Image {
    id: number;
    image: string;
}
