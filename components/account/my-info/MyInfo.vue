<template>
    <div class="flex justify-center">
        <div class="max-w-[600px] w-[600px] py-[40px]">
            <EditAccountForm v-if="user.id" />
            <NotLogged v-else />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserAvatar from '../../dashboard/header/UserAvatar.vue';
import EditAccountForm from '../../form/account/EditAccountForm.vue';
import NotLogged from '../NotLogged.vue';
import { useUserStore } from '~/store/user';
export default defineComponent({
    name: 'MyInfo',
    components: {
        UserAvatar,
        EditAccountForm,
        NotLogged,
    },
    setup() {
        const user = useUserStore();
        return {
            user,
        };
    },
});
</script>

<style scoped></style>
