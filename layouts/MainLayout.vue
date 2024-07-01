<template>
    <div>
        <DashBoardHeader />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashBoardHeader from '~/components/dashboard/header/DashBoardHeader.vue';
export default defineComponent({
    name: 'MainLayout',
    components: {
        DashBoardHeader,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
