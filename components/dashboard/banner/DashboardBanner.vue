<template>
    <div class="w-full">
        <div class="px-6 w-full lg:hidden">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchForm from '~/components/form/SearchForm.vue';
export default defineComponent({
    name: 'DashboardBanner',
    components: {
        SearchForm,
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
