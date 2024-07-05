import type { BaseValidationInterface } from './base-validation';

export interface RegisterValidateInterFace {
    name: BaseValidationInterface;
    email: BaseValidationInterface;
    password: BaseValidationInterface;
    confirm_password: BaseValidationInterface;
}
