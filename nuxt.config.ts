// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from 'nuxt/schema';

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
    hooks: {
        // 'pages:extend'(pages) {
        //     function setMiddleware(pages: NuxtPage[]) {
        //         for (const page of pages) {
        //             if (/* some condition */ true) {
        //                 page.meta ||= {};
        //                 // Note that this will override any middleware set in `definePageMeta` in the page
        //                 page.meta.middleware = ['named'];
        //             }
        //             if (page.children) {
        //                 setMiddleware(page.children);
        //             }
        //         }
        //     }
        //     setMiddleware(pages);
        // },
    },
});
