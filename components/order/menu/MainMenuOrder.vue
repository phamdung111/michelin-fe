<template>
    <div>
        <TabSwitcherMenu :default-menu="defaultMenu" :menu="menu" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabSwitcherMenu from '~/components/tabs/TabSwitcherMenu.vue';
export default defineComponent({
    name: 'MainMenuOrder',
    components: {
        TabSwitcherMenu,
    },
    setup() {
        const defaultMenu = ref(0);
        const menu = [
            {
                link: '/order',
                name: 'Orders Today',
            },
            {
                link: '/order/old',
                name: 'Old Orders',
            },
            {
                link: '/order/future',
                name: 'Future Orders',
            },
        ];
        return {
            defaultMenu,
            menu,
        };
    },
});
</script>

<style scoped></style>
