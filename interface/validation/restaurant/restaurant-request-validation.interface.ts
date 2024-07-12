import type { BaseValidationInterface } from '../base-validation';

export interface RestaurantRequestValidationInterface {
    name: BaseValidationInterface;
    email: BaseValidationInterface;
    address: BaseValidationInterface;
    phone: BaseValidationInterface;
    description: BaseValidationInterface;
    allow_booking: BaseValidationInterface;
    image0: BaseValidationInterface;
}
