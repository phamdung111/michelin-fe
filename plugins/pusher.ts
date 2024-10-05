import Pusher from 'pusher-js';

import { useAuthenticationStore } from '~/store/authentication';
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const auth = useAuthenticationStore();
    const pusher = new Pusher(config.public.pusherKey, {
        cluster: config.public.pusherCluster,
        forceTLS: true,
        authEndpoint: `${config.public.apiBase}/api/pusher/auth`,
        auth: {
            headers: {
                Authorization: `Bearer ${auth.access_token}`,
                'Login-Source': auth.login_source,
            },
        },
    });
    return {
        provide: {
            pusher,
        },
    };
});
