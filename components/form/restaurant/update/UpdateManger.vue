<template>
    <div class="mt-3">
        <div>
            Add restaurant's manager
            <input v-model="newManagerEmail" type="text" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="manager email" />
        </div>
        <div v-if="notFoundUser" class="text-[12px] text-primaryOrange">
            {{ notFoundUser }}
        </div>

        <div v-else-if="manager" class="flex items-center gap-3 border px-2 relative rounded-lg border-primaryColor3 text-[12px]">
            <div class="absolute top-1 right-1" @click="clearManager()">
                <Icon name="mdi:close" size="20" />
            </div>
            <div>
                <UserAvatar :avatarLink="manager.avatar" />
            </div>
            <div>
                <div>
                    <span>name: </span>
                    <span>{{ manager.name }}</span>
                </div>
                <div>
                    <span>email:</span>
                    <span>{{ manager.email }}</span>
                </div>
                <div>
                    <span>phone:</span>
                    <span>{{ manager.phone }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { RestaurantCheckManagerInterface } from '~/interface/response/restaurant/check-manager/restaurant-check-manager.interface';
import UserAvatar from '~/components/dashboard/header/UserAvatar.vue';
import { accountUpdateRestaurantService } from '~/service/account/restaurant/update/account-update-restaurant.service';

export default defineComponent({
    name: 'UpdateManger',
    components: {
        UserAvatar,
    },
    props: {
        manager: {
            type: Object as PropType<RestaurantCheckManagerInterface | null>,
            default: null,
        },
        restaurantSelected: {
            type: Object as PropType<Record<string, string | number>>,
            default: null,
        },
    },
    setup(props, ctx) {
        const newManagerEmail = ref('');
        const notFoundUser = ref('');
        const userManagerFind = ref<RestaurantCheckManagerInterface | null>(null);
        const clearManager = () => {
            notFoundUser.value = '';
            userManagerFind.value = null;
            ctx.emit('userManagerFind', userManagerFind.value);
        };
        watch(
            () => newManagerEmail.value,
            async () => {
                const rexEmail =
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (newManagerEmail.value === '') {
                    notFoundUser.value = '';
                    userManagerFind.value = props.manager;
                }
                if (newManagerEmail.value.match(rexEmail)) {
                    const response = await accountUpdateRestaurantService.checkManger(newManagerEmail.value, Number(props.restaurantSelected.id));

                    if ('message' in response) {
                        notFoundUser.value = response.message;
                        userManagerFind.value = null;
                        ctx.emit('userManagerFind', userManagerFind.value);
                    } else {
                        userManagerFind.value = response!;
                        ctx.emit('userManagerFind', userManagerFind.value);
                        notFoundUser.value = '';
                    }
                }
            },
            {
                immediate: true,
            }
        );
        return {
            newManagerEmail,
            notFoundUser,
            clearManager,
        };
    },
});
</script>

<style scoped></style>
