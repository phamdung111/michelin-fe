import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import LoginForm from '~/components/form/login-form/LoginForm.vue';
export default defineNuxtRouteMiddleware(async (to, from) => {
    const ui = useUiStore();
    const user = useUserStore();
    if (user.role !== 'admin') {
        ui.openPopup(LoginForm);
        return navigateTo('/');
    }
});
