// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['nuxt-svgo', 'nuxt-icons', 'nuxt-icon'],
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
        apiSecret: '123',
        public: {
            apiBase: '/api',
        },
    },
    icon: {
        customCollections: [
            {
                prefix: 'my-icon',
                dir: './assets/icons',
            },
        ],
    },
});
