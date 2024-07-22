<template>
    <div class="mt-3 w-full">
        <div v-if="order.orders.length" class="w-full">
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
                        <select
                            v-model="ordersStatus[item.id]"
                            @change.prevent="setStatusRestaurant($event, Number(item.id))"
                            v-if="key === 'status'"
                            class="w-full h-[30px] bg-transparent"
                            :class="[
                                { 'text-primaryOrange': ordersStatus[item.id] === 'cancel' },
                                { 'text-primaryYellow': ordersStatus[item.id] === 'booking' },
                                { 'text-primaryBlue': ordersStatus[item.id] === 'done' },
                            ]">
                            <option :selected="item[key] === 'booking'" class="text-primaryColor" value="booking">booking</option>
                            <option :selected="item[key] === 'done'" class="text-primaryColor" value="done">done</option>
                            <option :selected="item[key] === 'cancel'" class="text-primaryColor" value="cancel">cancel</option>
                        </select>
                        <h2 v-else-if="key === 'order_time'" class="font-bold text-[20px] text-center text-primaryOrange">{{ formatTimeToHourProvider(item[key]) }}</h2>
                        <h2 v-else-if="key === 'guests'" class="font-bold text-center">{{ item[key] }}</h2>
                        <div v-else-if="key === 'restaurant'" class="font-bold text-center">
                            <div class="flex items-center gap-1">
                                <img class="rounded-full w-[30px] h-[30px]" :src="item[key].images[0]" alt="" />
                                <h6>{{ item[key].name }}</h6>
                            </div>
                        </div>
                        <div v-else-if="key === 'id'"></div>
                        <div v-else-if="key === 'userOrdered'" class="font-bold text-center">
                            <div class="flex items-center gap-1">
                                <img class="rounded-full w-[40px] h-[40px]" :src="item[key].avatar" alt="" />
                                <h6>{{ item[key].name }}</h6>
                            </div>
                        </div>

                        <h2 v-else>{{ item[key] }}</h2>
                    </td>
                </template>
            </BaseTable>
        </div>
        <div v-else>
            <h6 class="text-center text-[1.5rem] font-medium">Your restaurants aren't order today!</h6>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import BaseTable from '../table/BaseTable.vue';

import { useOrderStore } from '~/store/order';
import { formatTimeToHourProvider } from '~/provider/format/date/format-time-to-hour.provider';
import { restaurantOrdersTodayInitialDataComposable } from '~/composables/restaurant/order/initial/today/restaurant-orders-today-initial-data.composable';
import { orderUpdateStatusComposable } from '~/composables/restaurant/order/update/status/order-update-status.composable';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'OrderToday',
    props: {
        headers: {
            type: Array as PropType<String[]>,
            default: [],
        },
    },
    components: {
        BaseTable,
    },
    setup() {
        const ui = useUiStore();
        const order = useOrderStore();
        const route = useRoute();
        const ordersStatus = ref<Record<number, string>>({});
        const statusChange = ref<Record<number, string>>({});

        const toPage = async (toPage: Number) => {
            await restaurantOrdersTodayInitialDataComposable(toPage);
            order.orders.forEach((restaurant) => {
                restaurant.id in ordersStatus.value === false ? (ordersStatus.value[restaurant.id] = restaurant.status) : '';
            });
        };
        const setStatusRestaurant = async (event: Event, orderId: number) => {
            const selectedStatus = (event.target as HTMLSelectElement).value;
            ordersStatus.value[orderId] = selectedStatus;

            const response = await orderUpdateStatusComposable({ orderId: orderId, status: selectedStatus });
            if (response) {
                const originOrderChangeStatus = order.orders.find((order) => order.id === orderId);
                originOrderChangeStatus?.status === selectedStatus ? delete statusChange.value[orderId] : (statusChange.value[orderId] = selectedStatus);
            } else {
                ui.openNotification({ status: 'fails', message: 'something went wrong!' });
            }
        };

        onMounted(async () => {
            let page = route.query.restaurant || 1;
            await restaurantOrdersTodayInitialDataComposable(Number(page));
            order.orders.forEach((order) => {
                ordersStatus.value[order.id] = order.status;
            });
        });
        const headers = [
            {
                title: 'ID',
                key: 'id',
            },
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
        return {
            order,
            headers,
            ordersStatus,
            setStatusRestaurant,
            formatTimeToHourProvider,
            toPage,
        };
    },
});
</script>

<style scoped></style>
