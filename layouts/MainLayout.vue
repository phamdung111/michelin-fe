<template>
    <div>
        <DashBoardHeader />
        <div class="mt-spaceTopNav flex justify-center">
            <slot />
        </div>
        <DashBoardFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashBoardHeader from '~/components/dashboard/header/DashBoardHeader.vue';
import DashBoardFooter from '~/components/dashboard/footer/DashBoardFooter.vue';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'MainLayout',
    components: {
        DashBoardHeader,
        DashBoardFooter,
    },
    setup() {
        const ui = useUiStore();
        return {
            ui,
        };
    },
});
</script>

<style scoped></style>
