<template>
    <div class="fixed top-[140px] w-screen z-notification" :class="isHidden ? 'hidden' : 'notification'">
        <div class="w-full flex justify-center">
            <h2
                :class="ui.notification.status === 'success' ? 'text-primaryGreen' : 'text-primaryOrange'"
                class="text-[24px] font-semibold py-[50px] border px-[50px] rounded-md shadow-2xl">
                {{ ui.notification.message }}
            </h2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'NotificationOverlay',
    setup() {
        const ui = useUiStore();
        const isHidden = ref(true);
        watch(
            () => ui.notification.message,
            (newValue: string | null) => {
                if (newValue) {
                    isHidden.value = false;
                    setTimeout(() => {
                        isHidden.value = true;
                        setTimeout(() => {
                            ui.clearNotification();
                        }, 200);
                    }, 3000);
                }
            },
            { immediate: true }
        );
        return {
            ui,
            isHidden,
        };
    },
});
</script>

<style lang="scss" scoped>
@keyframes moveNotification {
    0% {
        top: 0;
    }
    100% {
        top: 140px;
    }
}

.notification {
    animation: moveNotification 2s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    animation-iteration-count: 1;
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
    }
}
</style>
