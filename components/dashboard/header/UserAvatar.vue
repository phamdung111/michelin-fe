<template>
    <div>
        <img :style="{ width: `${size}px`, height: `${size}px` }" class="rounded-full border border-primaryColor1" :src="user.id ? user.avatar : defaultAvatar" alt="" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '~/store/user';
import defaultAvatar from '@/assets/images/michelin-default-profile-image.png';
export default defineComponent({
    name: 'UserAvatar',
    props: {
        size: {
            type: Number,
            default: 40,
        },
    },
    setup() {
        let user = useUserStore();
        watch(
            () => user.isUpdateUser,
            () => {
                if (user.isUpdateUser === true) {
                    user = useUserStore();
                }
            }
        );
        return {
            user,
            defaultAvatar,
        };
    },
});
</script>

<style scoped></style>
