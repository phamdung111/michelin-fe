import type { BaseValidationInterface } from './base-validation';

export interface LoginValidateInterface {
    email: BaseValidationInterface;
    password: BaseValidationInterface;
    loginError: BaseValidationInterface;
}
