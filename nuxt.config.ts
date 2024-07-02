// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['nuxt-svgo', 'nuxt-icon', '@pinia/nuxt'],
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
    runtimeConfig: {
        // apiSecret: '123',
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
});
