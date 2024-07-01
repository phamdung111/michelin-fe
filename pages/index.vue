<template>
    <nuxt-layout name="main-layout">
        <MainDashBoard></MainDashBoard>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainDashBoard from '~/components/dashboard/main/MainDashBoard.vue';
export default defineComponent({
    components: {
        MainDashBoard,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
