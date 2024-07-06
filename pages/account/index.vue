<template>
    <nuxt-layout name="main-layout">
        <div class="w-full flex justify-center">
            <MainAccount />
        </div>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainAccount from '~/components/account/MainAccount.vue';
export default defineComponent({
    components: {
        MainAccount,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
