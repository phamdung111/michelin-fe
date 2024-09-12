import type { LoginRequestInterface } from '~/interface/request/login/login-request.interface';
import { http } from '~/utils/http/http';
import axios from 'axios';
import type { AuthenticationResponseInterface } from '~/interface/response/authentication/authentication-response.interface';
export const loginService = Object.freeze({
    login: async (payload: LoginRequestInterface): Promise<any> => {
        try {
            const response = await http().post('/api/login', payload);
            return response.data;
        } catch (error: any) {}
    },
    githubCallback: async (code: string): Promise<AuthenticationResponseInterface> => {
        try {
            const response = await http().post('/api/github/callback', {
                code: code,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    googleCallback: async (code: string): Promise<AuthenticationResponseInterface> => {
        try {
            const response = await http().post('/api/google/callback', {
                code: code,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
