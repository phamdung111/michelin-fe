<template>
    <div class="w-full">
        <table class="w-full overflow-hidden">
            <thead class="bg-primaryGreen">
                <tr>
                    <th v-for="header in headers" :key="header.title" style="text-align: center">
                        <span v-if="header.title === 'ID'"></span>
                        <span v-else>
                            {{ header.title }}
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody v-if="mapData.length" class="text-[13px]">
                <tr v-for="(item, index) in mapData" :key="index" class="relative py-1 border-b">
                    <slot :item="item">
                        <td v-for="(cell, i) in item" :key="i">
                            {{ cell }}
                        </td>
                    </slot>
                </tr>
            </tbody>
            <tbody v-else class="w-full text-center h-min-[300px]">
                <tr>
                    <td class="py-[40px]" style="text-align: center">No data</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mt-2 w-full flex justify-center">
        <UPagination v-model="page" :page-count="perPage" :total="total" :max="10" show-last show-first :to="getPageUrl" />
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'BaseTable',
    props: {
        headers: {
            type: Array as PropType<Record<string, string>[]>,
            default: [],
        },
        items: {
            type: Array as PropType<Record<string, unknown>[]>,
            default: [],
        },
        currentPage: {
            type: Number,
            default: 0,
        },
        lastPage: {
            type: Number,
            default: 0,
        },
        perPage: {
            type: Number,
            default: 0,
        },
        total: {
            type: Number,
            default: 0,
        },
    },
    setup(props, emit) {
        const page = ref(props.currentPage);

        const getPageUrl = (toPage: number) => {
            return { query: { restaurant: toPage } };
        };
        const mapData = computed(() =>
            props.items.length
                ? props.items.map((item) => {
                      const mapData: Record<string, unknown> = {};
                      props.headers.forEach((header) => {
                          mapData[header.key] = item[header.key];
                      });
                      return mapData;
                  })
                : []
        );

        watch(
            () => page.value,
            () => {
                emit.emit('toPage', page.value);
            }
        );
        watch(
            () => props.currentPage,
            (newPage) => {
                page.value = newPage;
            },
            { immediate: true }
        );
        return {
            page,
            mapData,
            getPageUrl,
        };
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
