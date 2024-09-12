<template>
    <div class="w-full h-screen flex items-center justify-center">
        <Icon name="eos-icons:loading" size="40" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { githubLoginCallbackComposable } from '~/composables/login/github/github-login-callback.composable';
import { googleLoginCallbackComposable } from '~/composables/login/google/google-login-callback.composable';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    setup() {
        const route = useRoute();
        const ui = useUiStore();
        const code = ref('');

        onMounted(async () => {
            code.value = String(route.query.code);
            const response = ref(false);
            if (window.name === 'GitHubLoginPopup') {
                response.value = await githubLoginCallbackComposable(code.value);
            }
            if (window.name === 'GoogleLoginPopup') {
                response.value = await googleLoginCallbackComposable(code.value);
            }
            response.value ? window.close() : '';
        });
        return {};
    },
});
</script>

<style scoped></style>
