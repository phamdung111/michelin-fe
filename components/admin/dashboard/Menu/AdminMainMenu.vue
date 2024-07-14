<template>
    <div class="my-2">
        <TabSwitcherMenu :menu="menu" :default-menu="defaultMenu" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabSwitcherMenu from '~/components/tabs/TabSwitcherMenu.vue';
export default defineComponent({
    name: 'AdminMainMenu',
    components: {
        TabSwitcherMenu,
    },
    setup() {
        const defaultMenu = ref(0);
        const menu = [
            {
                link: '/admin',
                name: 'Restaurants',
            },
            {
                link: '/admin/users',
                name: 'Users',
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
