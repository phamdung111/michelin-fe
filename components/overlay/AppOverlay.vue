<template>
    <div v-if="ui.overlay.isOpenOverlay" class="fixed z-100 top-0 right-0">
        <div class="w-screen h-screen bg-primaryWhite bg-opacity-50 flex items-center justify-center">
            <component :is="{ ...component }" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'AppOverlay',
    setup() {
        const ui = useUiStore();
        const component = computed(() => ui.overlay.component);
        return {
            component,
            ui,
        };
    },
});
</script>

<style scoped></style>
