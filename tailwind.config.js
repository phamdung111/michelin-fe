/** @type {import('tailwindcss').Config} */
export default {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
    theme: {
        extend: {
            colors: {
                primaryColor: '#333333',
                primaryColor2: '#ffffff',
                primaryColor3: 'rgb(77, 77, 77)',
                primaryColor4: 'rgb(78, 78, 78)',
                primaryColor5: 'rgb(1, 1, 1)',
                primaryWhite: '#fff',
                primaryOrange: 'rgb(189, 35, 51)',
                primaryGreen: '#15A62B',
            },
            spacing: {
                spaceTopNav: '64px',
            },
            height: {
                header: '64px',
            },
            zIndex: {
                menu: '10',
            },
        },
    },
    plugins: [],
};
