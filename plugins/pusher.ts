// plugins/pusher.js
import Pusher from 'pusher-js';

export default defineNuxtPlugin((nuxtApp) => {
    const pusher = new Pusher('b8ed2b015f877cee2174', {
        cluster: 'ap1',
        forceTLS: true,
    });

    nuxtApp.provide('pusher', pusher);
});
