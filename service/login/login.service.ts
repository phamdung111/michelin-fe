import type { LoginRequestInterface } from '~/interface/request/login/login-request.interface';
import { http } from '~/utils/http/http';

export const loginService = Object.freeze({
    login: async (payload: LoginRequestInterface): Promise<any> => {
        try {
            const response = await http().post('/api/auth/login', payload);
            return response.data;
        } catch (error: any) {}
    },
});
