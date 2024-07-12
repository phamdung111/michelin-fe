<template>
    <div class="w-full">
        <table class="w-full">
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">{{ header }}</th>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'BaseTable',
    props: {
        headers: {
            type: Array as PropType<string[]>,
            default: [],
        },
        items: {
            type: Array as PropType<Record<string, unknown>[]>,
            default: [],
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped>
table,
td,
th {
    border: 1px solid #ddd;
    text-align: left;
}
</style>
