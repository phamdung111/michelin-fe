<template>
    <div>
        <div class="w-full">
            <div v-if="user.orders.orders.length" class="grid gap-2">
                <div v-for="order in user.orders.orders" :key="order.id">
                    <MyOrderDetail :order="order" @changed="changed" />
                </div>
            </div>
            <div v-else-if="user.orders.orders.length === 0" class="py-[40px] w-full">
                <div class="h-[70px] py-4 border-y">
                    <h4 class="text-[18px] px-2">Confirmed orders will show up here.</h4>
                </div>
            </div>
            <div class="mt-[40px]" v-else>
                <NotLogged />
            </div>
            <div class="mt-4 w-full flex justify-center">
                <UPagination v-model="page" :page-count="user.orders.per_page" :total="user.orders.total" :max="10" show-last show-first :to="getPageUrl" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NotLogged from '../NotLogged.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import MyOrderDetail from './MyOrderDetail.vue';
import { useUserStore } from '~/store/user';
import { accountOrderInitialDataComposable } from '~/composables/account/order/initial/account-order-initial-data.composable';
export default defineComponent({
    name: 'MyOrder',
    components: {
        NotLogged,
        BaseButton,
        MyOrderDetail,
    },
    setup() {
        const user = useUserStore();
        const page = ref(1);
        const router = useRouter();
        const getPageUrl = async () => {
            router.push({ query: { page: page.value } });
            await accountOrderInitialDataComposable(page.value);
        };
        const changed = async () => {
            await accountOrderInitialDataComposable(page.value);
        };
        onMounted(async () => {
            await accountOrderInitialDataComposable(page.value);
        });

        return {
            user,
            page,
            getPageUrl,
            changed,
        };
    },
});
</script>

<style scoped></style>
