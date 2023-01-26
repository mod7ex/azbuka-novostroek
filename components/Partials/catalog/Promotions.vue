<script setup lang="ts">
import BuildingPromotion from "~/components/Partials/catalog/Promotion.vue";

const props = defineProps<{ id?: string; discounts?: any[] }>();

const { scroll, targetRef } = useScroll();

const count = computed(() => props.discounts.length > 1);
</script>

<template>
    <NuxtLayout name="app-section" :class="[$attrs.class, 'px-5 md:px-0 mb-6 md:mb-0']" :padding="false">
        <div :id="id" class="relative">
            <div ref="targetRef" class="no-scroll-thum overflow-x-scroll">
                <div class="flex gap-6 w-fit">
                    <!-- prettier-ignore -->
                    <building-promotion
                        v-for="item in discounts"
                        :key="item.id"
                        :discount="item"
                        :class="[
                            'mount-animation anm-hidden catalog-section-p md:rounded-[3px]',
                            count ? 'md:w-[800px]' : 'md:w-[870px]',
                            'w-[330px]'
                        ]"
                    />
                </div>
            </div>

            <scroll-button v-if="count" class="hidden md:block shadow-lg top-0 bottom-0 my-auto absolute right-[-25px]" :on-scroll="() => scroll({ left: 824 })" />
        </div>
    </NuxtLayout>
</template>
