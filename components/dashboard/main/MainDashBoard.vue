<template>
    <div>
        <div>
            <div class="px-6 py-4 lg:hidden">
                <h2 class="text-[14px] font-medium">RESTAURANTS</h2>
                <SearchForm :size="48" />
            </div>
            <div class="hidden lg:block">
                <div class="banner h-[655px] relative bg-cover bg-center bg-no-repeat flex items-center">
                    <div class="m-auto text-primaryWhite max-w-[90%]">
                        <h4 class="text-[27px] font-medium mb-[32px]">Discover and book hotels and restaurants selected by the MICHELIN Guide</h4>
                        <SearchForm :size="66" />
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-[40px] py-[20px]">
            <div class="max-w-[1200px] px-[24px] lg:px-[40px]">
                <LatestNews></LatestNews>
            </div>
        </div>

        <div class="pt-[80px] relative">
            <div>
                <div class="max-h-[444px] h-[226px] md:h-[444px] shadow-xl">
                    <img class="h-full w-full object-cover" src="@/assets/images/dashboard/footer-image.jpeg" alt="" />
                </div>
            </div>
            <div class="relative -mt-[100px]">
                <div class="mx-[57px] bg-white shadow-md rounded-lg">
                    <div class="flex">
                        <div class="px-4">
                            <img class="h-full" src="@/assets/images/dashboard/app-pic-en.jpg" alt="" />
                        </div>
                        <div class="px-4 flex items-center">
                            <div>
                                <MichelinStar class="w-[36px]"></MichelinStar>
                                <h2 class="text-[16px] md:text-[24px] font-medium">Use the app to find the best restaurants and hotels everywhere</h2>
                            </div>
                        </div>
                        <div class="px-4">
                            <div class="p-6">
                                <AppStoreIcon class="w-[150px] px-6 py-3" />
                                <ChPlayStoreIcon class="w-[150px] px-6 py-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MichelinStar from '~~/assets/icons/michelin-star.svg';
import AppStoreIcon from '~~/assets/icons/app-store-icon.svg';
import ChPlayStoreIcon from '~~/assets/icons/google-playstore-en.svg';
import SearchForm from '~/components/form/SearchForm.vue';
import LatestNews from './section/LatestNews.vue';
export default defineComponent({
    name: 'MainDashBoard',
    components: {
        SearchForm,
        LatestNews,
        AppStoreIcon,
        ChPlayStoreIcon,
        MichelinStar,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped>
.banner {
    background-image: url('@/assets/images/dashboard/banner.jpeg');
}
</style>
