<template>
    <div class="w-full">
        <div v-if="user.orders.length">{{ user.orders }}</div>
        <div v-else-if="user.orders.length === 0" class="py-[40px] w-full">
            <div class="h-[70px] py-4 border-y">
                <h4 class="text-[18px] px-2">Confirmed orders will show up here.</h4>
            </div>
        </div>
        <div class="mt-[40px]" v-else>
            <NotLogged />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NotLogged from '../NotLogged.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import { useUserStore } from '~/store/user';
import { accountOrderInitialDataComposable } from '~/composables/account/order/initial/account-order-initial-data.composable';
export default defineComponent({
    name: 'MyOrder',
    components: {
        NotLogged,
        BaseButton,
    },
    setup() {
        const user = useUserStore();
        onMounted(async () => {
            await accountOrderInitialDataComposable();
        });
        return {
            user,
        };
    },
});
</script>

<style scoped></style>
