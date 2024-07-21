<template>
    <div class="flex gap-4">
        <div v-for="tab in menu" :key="tab.name">
            <div
                @click.prevent="goTo(tab.link)"
                :class="tab.link === currentPath ? 'bg-primaryOrange text-white' : ''"
                class="px-4 py-2 text-4 border rounded-md text-[16px] hover:cursor-pointer">
                {{ tab.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type Prop, type PropType } from 'vue';

export default defineComponent({
    name: 'TabSwitcherMenu',
    props: {
        menu: {
            type: Array as PropType<Record<string, string>[]>,
            default: [],
        },
        defaultMenu: {
            type: Number,
            default: 0,
        },
    },
    setup(props) {
        const currentTab = ref(props.defaultMenu);
        const route = useRoute();
        const currentPath = route.path;
        const goTo = (route: string) => {
            navigateTo(route);
        };

        return {
            currentTab,
            currentPath,
            goTo,
        };
    },
});
</script>

<style scoped></style>
