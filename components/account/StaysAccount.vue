<template>
    <div v-if="user.id" class="py-[40px]">
        <div class="h-[70px] py-4 border-y">
            <h4 class="text-[18px]">Confirmed stays will show up here.</h4>
        </div>
    </div>
    <div class="mt-[40px]" v-else>
        <NotLogged />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '~/store/user';
import NotLogged from './NotLogged.vue';
export default defineComponent({
    name: 'StaysAccount',
    components: {
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
