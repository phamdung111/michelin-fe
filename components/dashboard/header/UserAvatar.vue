<template>
    <div v-if="avatarLink || user.avatar">
        <img :style="{ width: `${size}px`, height: `${size}px` }" class="rounded-full border border-primaryColor1" :src="!avatarLink ? user.avatar : avatarLink" alt="" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '~/store/user';
export default defineComponent({
    name: 'UserAvatar',
    props: {
        size: {
            type: Number,
            default: 40,
        },
        avatarLink: {
            type: String,
            default: null,
        },
    },
    setup(props) {
        const user = useUserStore();
        const avatar = ref('');
        !props.avatarLink ? (avatar.value = user.avatar) : (avatar.value = props.avatarLink);

        return {
            user,
            avatar,
        };
    },
});
</script>
