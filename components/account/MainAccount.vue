<template>
    <div class="max-w-[1200px] w-full lg:w-[1200px] text-primaryColor">
        <div class="mt-4 text-[14px] font-medium md:text-[28px] px-6">
            <div class="my-5">
                <MyInfo />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyInfo from './my-info/MyInfo.vue';

export default defineComponent({
    name: 'MainAccount',
    components: {
        MyInfo,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
