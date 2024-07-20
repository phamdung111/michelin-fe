<template>
    <div class="mt-5">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
            <div v-for="restaurant in user.restaurants.items" :key="restaurant.id" class="shadow-xl w-full border">
                <div class="aspect-square w-full" style="aspect-ratio: 1/1">
                    <img class="object-cover w-full h-full" :src="restaurant.images[0].image" alt="" />
                </div>
                <div class="text-[12px] font-medium px-1">
                    <h4 class="text-[20px] font-bold mb-1">{{ restaurant.name }}</h4>
                    <h5>{{ restaurant.address }}</h5>
                    <h5>{{ restaurant.phone }}</h5>
                    <h5>Allow Booking: {{ restaurant.allow_booking }}</h5>
                    <h5>{{ restaurant.description }}</h5>
                    <h5
                        :class="[
                            { 'text-primaryYellow': restaurant.status === 'pending' },
                            { 'text-primaryBlue': restaurant.status === 'approved' },
                            { 'text-primaryOrange': restaurant.status === 'reject' },
                        ]">
                        Status: {{ restaurant.status }}
                    </h5>
                </div>
                <div class="w-full flex justify-end mb-2 pr-2">
                    <div class="w-[150px] flex gap-2 justify-end">
                        <BaseButton @click="deleteRestaurant(restaurant.id)" content="Delete" :size="30" />
                        <BaseButton @click.prevent="editRestaurant(restaurant.id)" content="Edit" :size="30" />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 w-full flex justify-center">
            <UPagination v-model="page" :page-count="user.restaurants.per_page" :total="user.restaurants.total" :max="10" show-last show-first :to="getPageUrl" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { accountRestaurantInitialDataComposable } from '~/composables/account/restaurant/initial/account-restaurants-initial-data.composable';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import BaseButton from '~/components/button/BaseButton.vue';
import UpdateRestaurantForm from '~/components/form/restaurant/UpdateRestaurantForm.vue';
import { accountDeleteRestaurantComposable } from '~/composables/account/restaurant/delete/account-delete-restaurant.composable';
export default defineComponent({
    name: 'MyRestaurant',
    components: {
        BaseButton,
    },
    setup() {
        const ui = useUiStore();
        const user = useUserStore();
        const route = useRoute();
        const router = useRouter();
        const page = ref(1);
        const totalPage = ref();
        const editRestaurant = (id: number) => {
            const restaurantSelected = user.restaurants.items.find((item) => item.id === id);
            ui.openPopupData(UpdateRestaurantForm, restaurantSelected);
        };
        const getPageUrl = async () => {
            router.push({ query: { page: page.value } });
            await accountRestaurantInitialDataComposable(page.value);
        };
        const deleteRestaurant = async (restaurantId: number) => {
            ui.openNotificationDelete({ name: 'restaurant', id: restaurantId });
        };
        onMounted(async () => {
            page.value = Number(route.query.restaurants || 1);

            user.id ? await accountRestaurantInitialDataComposable(page.value) : '';
            totalPage.value = user.restaurants.last_page;
        });

        watch(
            () => ui.notificationDelete.isDelete,
            async () => {
                if (ui.notificationDelete.isDelete === true && ui.notificationDelete.itemDelete?.name === 'restaurant') {
                    await accountDeleteRestaurantComposable(ui.notificationDelete.itemDelete.id);
                    ui.clearNotificationDelete();
                    await accountRestaurantInitialDataComposable(page.value);
                }
            }
        );
        return {
            user,
            page,
            totalPage,
            editRestaurant,
            getPageUrl,
            deleteRestaurant,
        };
    },
});
</script>

<style scoped></style>
