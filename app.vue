<template>
    <div>
        <NuxtPage />
    </div>
    <div v-if="ui.isLoading" class="fixed flex items-center justify-center top-0 left-0 h-full w-full bg-black z-notification bg-opacity-50">
        <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#FFFFFF" />
    </div>
</template>
<script setup>
import { useUiStore } from './store/ui';
import { useAuthenticationStore } from './store/authentication';
import { authenticationComposable } from './composables/authentication/authentication-composable';
const ui = useUiStore();

const auth = useAuthenticationStore();
onBeforeMount(() => {
    if (auth.isLogin) {
        authenticationComposable();
    }
});
onBeforeMount(() => {});
</script>
