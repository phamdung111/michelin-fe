<template>
    <div>
        <TabSwitcherMenu :default-menu="defaultMenu" :menu="menu" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabSwitcherMenu from '~/components/tabs/TabSwitcherMenu.vue';
import { MENU } from '~/constant/menu/menu.constant';
import { ROUTE } from '~/constant/route/route.constant';

export default defineComponent({
    name: 'ManagerMenuOrder',
    components: {
        TabSwitcherMenu,
    },
    setup() {
        const defaultMenu = ref(0);
        const menu = [
            {
                link: `/${ROUTE.MANAGER_RESTAURANT.ORDERS}`,
                name: MENU.MANAGER_RESTAURANT.ORDERS,
            },
            {
                link: `/${ROUTE.MANAGER_RESTAURANT.OLD_ORDERS}`,
                name: MENU.MANAGER_RESTAURANT.OLD_ORDERS,
            },
            {
                link: `/${ROUTE.MANAGER_RESTAURANT.FUTURE_ORDERS}`,
                name: MENU.MANAGER_RESTAURANT.FUTURE_ORDERS,
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
