<template>
    <div v-if="user.restaurants.items.length" class="mt-5">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
            <div v-for="restaurant in user.restaurants.items" :key="restaurant.id" class="shadow-xl w-full border flex flex-col justify-between">
                <nuxt-link :to="`/restaurant/${restaurant.id}`" target="_blank">
                    <div>
                        <div class="aspect-square w-full" style="aspect-ratio: 1/1">
                            <img class="object-cover w-full h-full" :src="restaurant.avatar" alt="" />
                        </div>
                        <div class="text-[12px] font-medium px-1">
                            <h4 class="text-[20px] font-bold mb-1">{{ restaurant.name }}</h4>
                            <h5>{{ restaurant.address }}</h5>
                            <h5>{{ restaurant.phone }}</h5>
                            <h5>Allow Booking: {{ restaurant.allow_booking }}</h5>
                            <h5 class="line-clamp-2">{{ restaurant.description }}</h5>
                            <h5
                                :class="[
                                    { 'text-primaryYellow': restaurant.status === 'pending' },
                                    { 'text-primaryBlue': restaurant.status === 'approved' },
                                    { 'text-primaryOrange': restaurant.status === 'reject' },
                                ]">
                                Status: {{ restaurant.status }}
                            </h5>
                        </div>
                    </div>
                </nuxt-link>

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
    <div v-else class="mt-[100px] w-full text-center">
        <h6 class="text-[30px]">You haven't any restaurant</h6>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ownRestaurantInitialDataComposable } from '~/composables/own-restaurant/restaurant/initial/own-restaurants-initial-data.composable';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import BaseButton from '~/components/button/BaseButton.vue';
import UpdateRestaurantForm from '~/components/form/restaurant/update/UpdateRestaurantForm.vue';
import { ownDeleteRestaurantComposable } from '~/composables/own-restaurant/restaurant/delete/account-delete-restaurant.composable';
import { ROUTE } from '~/constant/route/route.constant';
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
            await ownRestaurantInitialDataComposable(page.value);
        };
        const deleteRestaurant = async (restaurantId: number) => {
            ui.openNotificationDelete({ name: 'restaurant', id: restaurantId });
        };
        onBeforeMount(async () => {
            page.value = Number(route.query.page || 1);

            user.id ? await ownRestaurantInitialDataComposable(page.value) : '';
            totalPage.value = user.restaurants.last_page;
        });

        watch(
            () => ui.notificationDelete.isDelete,
            async () => {
                if (ui.notificationDelete.isDelete === true && ui.notificationDelete.itemDelete?.name === 'restaurant') {
                    await ownDeleteRestaurantComposable(ui.notificationDelete.itemDelete.id);
                    ui.clearNotificationDelete();
                    await ownRestaurantInitialDataComposable(page.value);
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
