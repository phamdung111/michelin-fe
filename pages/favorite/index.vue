<template>
    <nuxt-layout name="main-layout">
        <MainFavorite />
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFavorite from '~/components/favorite/MainFavorite.vue';
import { accountFavoriteInitialDataComposable } from '~/composables/account/favorite/account-favorites-initial-data.composable';
export default defineComponent({
    components: {
        MainFavorite,
    },
    setup() {
        onMounted(async () => {
            await accountFavoriteInitialDataComposable();
        });
        return {};
    },
});
</script>

<style scoped></style>
