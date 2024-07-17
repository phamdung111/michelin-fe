<template>
    <div class="w-full">
        <DashboardBanner />
        <div class="pt-[40px] py-[20px] flex justify-center">
            <div class="max-w-[1200px] px-[24px] lg:px-[40px] w-full">
                <DashBoardRestaurant />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MichelinStar from '~~/assets/icon/michelin-star.svg';
import AppStoreIcon from '~~/assets/icon/app-store-icon.svg';
import ChPlayStoreIcon from '~~/assets/icon/google-playstore-en.svg';
import SearchForm from '~/components/form/SearchForm.vue';
import DashBoardLatestNews from './section/DashBoardLatestNews.vue';
import DashBoardRestaurant from './section/DashBoardRestaurant.vue';
import DashboardBanner from '../banner/DashboardBanner.vue';
export default defineComponent({
    name: 'MainDashBoard',
    components: {
        SearchForm,
        DashBoardLatestNews,
        DashBoardRestaurant,
        DashboardBanner,
        AppStoreIcon,
        ChPlayStoreIcon,
        MichelinStar,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
