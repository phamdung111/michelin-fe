<template>
    <nuxt-layout name="layout-menu">
        <template #title> My Account </template>
        <template #menu>
            <AccountMenu />
        </template>
        <template #content>
            <div class="w-full flex justify-center">
                <MainAccount />
            </div>
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainAccount from '~/components/account/MainAccount.vue';
import AccountMenu from '~/components/account/menu/AccountMenu.vue';
export default defineComponent({
    components: {
        MainAccount,
        AccountMenu,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
