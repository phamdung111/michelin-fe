import type { BaseValidationInterface } from '../base-validation';

export interface RestaurantRequestUpdateValidationInterface {
    name: BaseValidationInterface;
    email: BaseValidationInterface;
    address: BaseValidationInterface;
    phone: BaseValidationInterface;
    description: BaseValidationInterface;
    allow_booking: BaseValidationInterface;
}
