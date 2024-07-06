import type { BaseValidationInterface } from '../base-validation';

export interface AccountValidationInterface {
    description: BaseValidationInterface;
    email: BaseValidationInterface;
    name: BaseValidationInterface;
    phone: BaseValidationInterface;
    currentPassword: BaseValidationInterface;
    newPassword: BaseValidationInterface;
    repeatPassword: BaseValidationInterface;
}
