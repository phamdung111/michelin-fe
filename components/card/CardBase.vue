<template>
    <div class="w-full shadow-2xl pb-4 rounded-lg border">
        <div class="w-full aspect-square">
            <slot name="image" />
        </div>
        <div class="p-4 h-[160px] flex flex-col justify-between">
            <div class="overflow-hidden w-full">
                <span class="text-[14px] lg:text-[18px] font-medium line-clamp-2 text-ellipsis">
                    <slot name="title" />
                </span>
                <span class="text-[12px] text-primaryColor3 line-clamp-2 text-ellipsis">
                    <slot name="description" />
                </span>
            </div>
            <div class="pt-2">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'CardBase',
    props: {
        item: Object as PropType<any>,
        default: null,
    },
    setup() {
        return {};
    },
});
</script>
