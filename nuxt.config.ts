// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from 'nuxt/schema';
import { authenticationComposable } from './composables/authentication/authentication-composable';

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['nuxt-svgo', 'nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
    svgo: {
        defaultImport: 'component',
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    imports: {
        autoImport: true,
    },
    pages: true,
    runtimeConfig: {
        apiSecret: '',
        public: {
            apiBase: '',
        },
    },
    icon: {
        customCollections: [
            {
                prefix: 'my-icon',
                dir: './assets/icon',
            },
        ],
    },
    hooks: {},
});
