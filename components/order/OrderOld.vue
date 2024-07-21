<template>
    <div class="mt-3 w-full">
        <div v-if="order.orders.length">
            <BaseTable
                :items="order.orders"
                :headers="headers"
                :current-page="order.current_page"
                :last-page="order.last_page"
                :per-page="order.per_page"
                :total="order.total"
                @to-page="toPage">
                <template #default="{ item }">
                    <td v-for="key in Object.keys(item)" :key="key">
                        <h6
                            v-if="key === 'status'"
                            class="text-center"
                            :class="[
                                { 'text-primaryOrange': item[key] === 'cancel' },
                                { 'text-primaryYellow': item[key] === 'booking' },
                                { 'text-primaryBlue': item[key] === 'done' },
                            ]">
                            {{ item[key] }}
                        </h6>
                        <h6 v-else-if="key === 'order_time'" class="font-bold text-[20px] text-center text-primaryOrange">{{ item[key] }}</h6>
                        <h6 v-else-if="key === 'guests'" class="font-bold text-center">{{ item[key] }}</h6>
                        <div v-else-if="key === 'restaurant'" class="font-bold text-center">
                            <div class="flex items-center gap-1">
                                <img class="rounded-full w-[30px] h-[30px]" :src="item[key].images[0]" alt="" />
                                <h6>{{ item[key].name }}</h6>
                            </div>
                        </div>
                        <div v-else-if="key === 'userOrdered'" class="font-bold text-center">
                            <div class="flex items-center gap-1">
                                <img class="rounded-full w-[40px] h-[40px]" :src="item[key].avatar" alt="" />
                                <h6>{{ item[key].name }}</h6>
                            </div>
                        </div>
                        <h6 v-else>{{ item[key] }}</h6>
                    </td>
                </template>
            </BaseTable>
        </div>
        <div v-else>
            <h6 class="text-center">Your restaurants aren't order today!</h6>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTable from '../table/BaseTable.vue';
import { restaurantOrdersOldInitialDataComposable } from '~/composables/restaurant/order/initial/old/restaurant-orders-old-initial-data.composable';
import { useOrderStore } from '~/store/order';
export default defineComponent({
    name: 'OrderOld',
    components: {
        BaseTable,
    },
    setup() {
        const route = useRoute();
        const order = useOrderStore();
        const toPage = async (toPage: Number) => {
            await restaurantOrdersOldInitialDataComposable(toPage);
        };
        const headers = [
            {
                title: 'Time',
                key: 'order_time',
            },
            {
                title: 'Guests',
                key: 'guests',
            },
            {
                title: 'Restaurant',
                key: 'restaurant',
            },
            {
                title: 'User Ordered',
                key: 'userOrdered',
            },
            {
                title: 'Status',
                key: 'status',
            },
        ];
        onMounted(async () => {
            let page = route.query.restaurant || 1;
            await restaurantOrdersOldInitialDataComposable(Number(page));
        });
        return {
            order,
            headers,
            toPage,
        };
    },
});
</script>

<style scoped></style>
