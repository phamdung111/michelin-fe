<template>
    <div class="flex gap-4">
        <div v-for="(tab, index) in tabs" :key="tab.name">
            <div
                @click.prevent="currentTab = index"
                :class="index === currentTab ? 'bg-primaryOrange text-white' : ''"
                class="px-4 py-2 text-4 border rounded-md text-[16px] hover:cursor-pointer">
                {{ tab.name }}
            </div>
        </div>
    </div>
    <div>
        <component :is="tabs[currentTab].component" />
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { TabSwitcherInterface } from '~/interface/tab/tab-switcher.interface';

export default defineComponent({
    name: 'TabSwitcher',
    props: {
        tabs: {
            type: Array as PropType<TabSwitcherInterface[]>,
            default: [],
        },
        tabDefault: {
            type: Number,
            default: 0,
        },
    },
    setup(props) {
        const currentTab = ref(props.tabDefault);
        return {
            currentTab,
        };
    },
});
</script>

<style scoped></style>
