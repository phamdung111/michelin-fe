import { registerData } from '~/composables/register/register-form-data.composable';
import type { RegisterRequestMapperInterface } from '~/interface/mapper/register/register-request-mapper.interface';

export const registerRequestMapper = (): RegisterRequestMapperInterface => {
    return {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        password_confirmation: registerData.confirm_password,
    };
};
