<template>
    <MainSectionBase>
        <template #title>
            <h2>Latest News</h2>
        </template>
        <template #content>
            <div class="flex">
                <div class="basis-1/3">
                    <CardBase></CardBase>
                </div>
            </div>
        </template>
    </MainSectionBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainSectionBase from './MainSectionBase.vue';
import CardBase from '~/components/card/CardBase.vue';
export default defineComponent({
    name: 'LatestNews',
    components: {
        MainSectionBase,
        CardBase,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
