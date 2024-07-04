import type { RegisterRequestMapperInterface } from '~/interface/mapper/register/register-request-mapper.interface';
import { http } from '~/utils/http/http';

export const registerService = Object.freeze({
    register: async (payload: RegisterRequestMapperInterface) => {
        try {
            const response = await http().post('api/auth/register/', payload);
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
