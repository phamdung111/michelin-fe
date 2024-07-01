<template>
    <div>
        <DashBoardHeader />
        <div class="mt-spaceTopNav">
            <slot />
        </div>
        <DashBoardFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashBoardHeader from '~/components/dashboard/header/DashBoardHeader.vue';
import DashBoardFooter from '~/components/dashboard/footer/DashBoardFooter.vue';
export default defineComponent({
    name: 'MainLayout',
    components: {
        DashBoardHeader,
        DashBoardFooter,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
