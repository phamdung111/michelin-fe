import { useUserStore } from '~/store/user';
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useUserStore();
    if (user.id !== 1) {
        return navigateTo('/');
    }
});
