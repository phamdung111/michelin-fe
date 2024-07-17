<template>
    <div class="pt-[40px] py-[20px] w-full">
        <div class="w-[54px] h-[4px] bg-primaryOrange"></div>
        <div class="pt-6 text-[24px] font-medium mb-6">
            <slot name="title" />
        </div>
        <div class="w-full">
            <div class="flex relative gap-2">
                <div class="absolute -top-[40px] right-0 text-primaryColor3 flex gap-4">
                    <div v-if="firstCurrentItem !== 0" @click.prevent="preButton()" class="border border-primaryColor3 flex justify-center p-1 rounded-sm">
                        <Icon size="15" name="material-symbols-light:arrow-back-ios-rounded" />
                    </div>
                    <div @click.prevent="nextButton()" v-if="lastCurrentItem < items.length" class="border border-primaryColor3 flex justify-center p-1 rounded-sm">
                        <Icon size="15" name="material-symbols-light:arrow-forward-ios-rounded" />
                    </div>
                </div>
                <div class="item basis-1/3 overflow-hidden" v-for="(item, index) in itemsShow" :key="index">
                    <nuxt-link :to="`/restaurant/${item.id}`" target="blank">
                        <CardBase :item="item">
                            <template #image>
                                <div class="relative w-full h-full">
                                    <img class="w-full h-full object-cover" :src="item.images[0].image" alt="" />
                                    <div class="absolute top-2 right-2">
                                        <div class="w-[30px] aspect-square bg-primaryWhite rounded-full flex justify-center items-center">
                                            <LikeButton :size="20" :restaurantId="item.id" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #title>{{ item.address }}</template>
                            <template #description>
                                {{ item.description }}
                            </template>
                            <template #footer>
                                <div class="flex justify-center">
                                    <BaseButton class="w-[120px]" bgColor="primaryOrange" content="Discover" :size="45"></BaseButton>
                                </div>
                            </template>
                        </CardBase>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { COUNT_SHOW } from '~/enum/count-show.enum';
import CardBase from '~/components/card/CardBase.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import LikeButton from '~/components/button/LikeButton.vue';
export default defineComponent({
    name: 'MainSectionBase',
    components: {
        CardBase,
        BaseButton,
        LikeButton,
    },
    props: {
        items: {
            type: Array as PropType<Record<string | number, any>[]>,
            default: [],
        },
        abilityLike: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        let lastCurrentItem = ref(COUNT_SHOW.COUNT);
        const itemsShow = ref<Record<string | number, any>[]>([]);
        const firstCurrentItem = computed(() => {
            return lastCurrentItem.value - COUNT_SHOW.COUNT;
        });
        const nextButton = () => {
            lastCurrentItem.value++;
        };
        const preButton = () => {
            lastCurrentItem.value--;
        };
        watch(
            () => lastCurrentItem.value,
            () => {
                itemsShow.value = props.items.slice(lastCurrentItem.value - COUNT_SHOW.COUNT, lastCurrentItem.value);
            }
        );
        onMounted(async () => {
            itemsShow.value = props.items.slice(0, lastCurrentItem.value);
        });
        return {
            lastCurrentItem,
            firstCurrentItem,
            itemsShow,
            nextButton,
            preButton,
        };
    },
});
</script>

<style scoped></style>
