// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from 'nuxt/schema';

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['nuxt-svgo', 'nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/ui'],

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
            githubClientId: '',
            githubClientSecret: '',
            githubClientRedirectUri: '',
            googleClientId: '',
            googleClientRedirectUri: '',
            googleClientSecret: '',
            pusherCluster: '',
            pusherKey: '',
        },
    },

    icon: {
        customCollections: [
            {
                prefix: 'icons',
                dir: './assets/icons',
            },
        ],
    },

    hooks: {
        'pages:extend'(pages) {
            function setMiddleware(pages: NuxtPage[]) {
                for (const page of pages) {
                    if (page.name?.startsWith('admin')) {
                        page.meta ||= {};
                        page.meta.middleware = ['admin'];
                    }
                    if (page.children) {
                        setMiddleware(page.children);
                    }
                }
            }
            setMiddleware(pages);
        },
    },

    plugins: ['~/plugins/pusher'],
    compatibilityDate: '2024-10-08',
});
