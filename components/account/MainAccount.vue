<template>
    <div class="max-w-[1200px] w-[1200px] text-primaryColor">
        <div class="mt-4 text-[14px] font-medium md:text-[28px] px-6">
            <h1>My Account</h1>
            <div class="my-5">
                <TabSwitcher :tabs="tabs" :tab-default="tabDefault"></TabSwitcher>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { TabSwitcherInterface } from '~/interface/tab/tab-switcher.interface';
import MyInfo from './MyInfo.vue';
import StaysAccount from './StaysAccount.vue';
import TabSwitcher from '../tabs/TabSwitcher.vue';
export default defineComponent({
    name: 'MainAccount',
    components: {
        TabSwitcher,
        MyInfo,
        StaysAccount,
    },
    setup() {
        const tabDefault = ref(0);
        const tabs: TabSwitcherInterface[] = [
            {
                name: 'My Info',
                component: MyInfo,
            },
            {
                name: 'Stays',
                component: StaysAccount,
            },
        ];
        return {
            tabDefault,
            tabs,
        };
    },
});
</script>

<style scoped></style>
