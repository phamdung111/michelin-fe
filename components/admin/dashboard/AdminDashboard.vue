<template>
    <div>
        <BaseTable
            :headers="headers"
            :items="restaurant.restaurants"
            :current-page="restaurant.current_page"
            :last-page="restaurant.last_page"
            :per-page="restaurant.per_page"
            :total="restaurant.total"
            @to-page="toPage">
            <template #default="{ item }">
                <td v-for="key in Object.keys(item)" :key="key">
                    <select
                        v-model="restaurantStatuses[item.id]"
                        @change.prevent="setStatusRestaurant($event, Number(item.id))"
                        v-if="key === 'status'"
                        class="w-full h-[30px] bg-transparent"
                        :class="[
                            { 'text-primaryOrange': restaurantStatuses[item.id] === 'reject' },
                            { 'text-primaryYellow': restaurantStatuses[item.id] === 'pending' },
                            { 'text-primaryBlue': restaurantStatuses[item.id] === 'approved' },
                        ]">
                        <option :selected="item[key] === 'pending'" class="text-primaryColor" value="pending">pending</option>
                        <option :selected="item[key] === 'approved'" class="text-primaryColor" value="approved">approved</option>
                        <option :selected="item[key] === 'reject'" class="text-primaryColor" value="reject">reject</option>
                    </select>
                    <h2 v-else>{{ item[key] }}</h2>
                </td>
            </template>
        </BaseTable>
        <div class="w-full flex justify-end">
            <div @click.prevent="saveStatusRestaurants()" class="w-[150px]">
                <BaseButton :disable="!isChange" content="Save"></BaseButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTable from '~/components/table/BaseTable.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import { adminRestaurantsInitialData } from '~/composables/admin/restaurant/initial/admin-restaurants-initial-data.composable';
import { useRestaurantStore } from '~/store/restaurant';
import { adminPermissionRestaurantComposable } from '~/composables/admin/restaurant/permission/admin-permission-restaurants.composable';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'AdminDashboard',
    components: {
        BaseTable,
        BaseButton,
    },
    setup() {
        const ui = useUiStore();
        const restaurant = useRestaurantStore();
        const route = useRoute();
        const isChange = ref(false);
        const restaurantStatuses = ref<Record<number, string>>({});
        const statusChange = ref<Record<number, string>>({});
        const setStatusRestaurant = (event: Event, restaurantId: number) => {
            const selectedStatus = (event.target as HTMLSelectElement).value;
            restaurantStatuses.value[restaurantId] = selectedStatus;
            const originRestaurantChangeStatus = restaurant.restaurants.find((restaurant) => restaurant.id === restaurantId);
            originRestaurantChangeStatus?.status === selectedStatus ? delete statusChange.value[restaurantId] : (statusChange.value[restaurantId] = selectedStatus);
        };
        const toPage = async (toPage: Number) => {
            await adminRestaurantsInitialData(toPage);
            restaurant.restaurants.forEach((restaurant) => {
                restaurant.id in restaurantStatuses.value === false ? (restaurantStatuses.value[restaurant.id] = restaurant.status) : '';
            });
        };
        const saveStatusRestaurants = async () => {
            const response = await adminPermissionRestaurantComposable(statusChange.value);
            if (response.status === 'success') {
                statusChange.value = {};
                ui.openNotification({ status: 'success', message: 'done' });
                let page = route.query.restaurant || 1;
                await adminRestaurantsInitialData(Number(page));
            }
        };
        const headers = [
            {
                title: 'ID',
                key: 'id',
            },
            {
                title: 'Status',
                key: 'status',
            },
            {
                title: 'Name',
                key: 'name',
            },
            {
                title: 'Email',
                key: 'email',
            },
            {
                title: 'Address',
                key: 'address',
            },

            {
                title: 'Phone Number',
                key: 'phone',
            },
            {
                title: 'Description',
                key: 'description',
            },
            {
                title: 'Create At',
                key: 'date',
            },
        ];
        watch(
            () => JSON.parse(JSON.stringify(statusChange.value)),
            (newValue, oldValue) => {
                if (Object.keys(statusChange.value).length === 0) {
                    isChange.value = false;
                } else {
                    for (const key in newValue) {
                        if (newValue[key] !== oldValue[key]) {
                            isChange.value = true;
                            break;
                        }
                    }
                }
            },
            { deep: true }
        );
        onMounted(async () => {
            let page = route.query.restaurant || 1;
            await adminRestaurantsInitialData(Number(page));
            restaurant.restaurants.forEach((restaurant, index) => {
                restaurantStatuses.value[restaurant.id] = restaurant.status;
            });
        });
        return {
            restaurant,
            headers,
            isChange,
            restaurantStatuses,
            toPage,
            setStatusRestaurant,
            saveStatusRestaurants,
        };
    },
});
</script>

<style scoped></style>
