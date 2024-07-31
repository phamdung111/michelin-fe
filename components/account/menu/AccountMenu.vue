<template>
    <div>
        <TabSwitcherMenu :menu="menu" :defaultMenu="defaultMenu" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabSwitcherMenu from '~/components/tabs/TabSwitcherMenu.vue';
export default defineComponent({
    name: 'AccountMenu',
    components: {
        TabSwitcherMenu,
    },
    setup() {
        const defaultMenu = ref(0);
        const menu = [
            {
                link: '/account',
                name: 'My Info',
            },
            {
                link: '/account/order',
                name: 'Orders',
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
