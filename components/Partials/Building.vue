<script lang="ts" setup>
import Building from "~/assets/img/building.png";
import { format_thousands } from "~/utils";

withDefaults(
    defineProps<{
        complex: any;
        img?: string;
        actions?: boolean;
        shadow?: true;
        whiteCta?: true;
    }>(),
    {
        img: Building,
        actions: true,
    }
);

const isAllBuilt = (payload) => payload?.count_homes?.total === payload?.count_homes?.finished;

const onlyFewBuilt = (payload) => payload?.count_homes?.finished > 0 && payload?.count_homes?.finished < payload?.count_homes?.total;

const startingPrice = (payload) => {
    let _items = payload?.apartments_summary;

    if (!(typeof _items === "object")) return 0;

    if (!Array.isArray(_items)) {
        _items = Object.values(_items);
    }

    return _items?.reduce((prev, curr) => {
        if (prev?.min_price > curr?.min_price) return curr;
        return prev;
    })?.min_price;
};
</script>

<template>
    <div :class="['wrapper', $attrs.class]">
        <div :class="['building transition-all duration-300 md:rounded-[3px] h-full flex flex-col', shadow ? 'building-shadow' : '']">
            <div class="relative img rounded-[5px] md:rounded-none md:rounded-t w-full">
                <div :class="['h-[120px] sm:h-44', whiteCta ? 'md:h-[163px]' : 'md:h-[200px]']">
                    <app-img class="rounded-[5px] md:rounded-b-none" fill :src="img" alt="" />
                </div>

                <span class="absolute top-0 right-0 left-0 flex justify-between p-[9px] md:p-[13px]" v-if="actions">
                    <span class="relative flex items-center justify-center h-6 w-6 md:w-10 md:h-10 bg-[#E71F61] rounded-full">
                        <app-i name="heroicons-solid:phone" class="text-white absolute w-3 h-3 md:h-5 md:w-5" />
                    </span>

                    <span class="md:flex">
                        <span class="md:w-10 md:h-10 relative flex items-center justify-center md:bg-[#FAFCFE] md:rounded-full mb-[10px]">
                            <app-i name="heroicons-outline:star" class="text-white md:absolute md:text-[#3478F6] w-4 h-4 md:h-5 md:w-5" />
                        </span>
                        <span class="md:w-10 md:h-10 relative flex items-center justify-center md:bg-[#FAFCFE] md:rounded-full md:ml-[9px]">
                            <bars-svg class="w-4 h-4" />
                        </span>
                    </span>
                </span>
            </div>

            <div :class="['px-[10px] md:px-[21px] text-sm pt-3 md:pt-[18px] pb-4', shadow ? '' : 'md:border-l-[1.6px] md:border-r-[1.6px] md:border-[#1da95826]']">
                <div class="flex justify-between flex-wrap mb-[5px] md:mb-[8px]">
                    <h2 class="font-normal uppercase leading-[11.74px] md:leading-[14px] font-[Raleway] text-[10px] text-xs text-[#4D4D4D]">
                        <slot name="description-up">{{ complex?.developer?.name }}</slot>
                    </h2>
                    <!-- desktop -->
                    <p class="italic font-medium text-xs leading-[14px] hidden font-[Inter] md:flex md:gap-2">
                        <span class="text-[#1DA958]" v-if="isAllBuilt(complex)">{{ "Сдан" }}</span>
                        <span class="text-[#3478F6]" v-else>{{ "Строится" }}</span>
                        <span class="text-[#1DA958]" v-if="onlyFewBuilt(complex)">{{ "Есть сданные" }}</span>
                    </p>
                </div>

                <h1 class="font-semibold md:font-bold text-[13px] md:text-[16px] text-[#131313] leading-[17px] md:leading-[19px] font-[Inter] md:mb-[13px]">
                    <slot name="description-middle">{{ complex.name }}</slot>
                </h1>

                <!-- mobile -->
                <p class="mt-[7px] text-[#3478F6] font-medium text-[12px] leading-[14.52px] md:hidden">
                    <!-- <slot name="price">от 10 335 млн ₽</slot> -->
                    <slot name="price">от {{ format_thousands(startingPrice(complex)) }} ₽</slot>
                </p>

                <!-- desktop -->
                <p class="items-center justify-start hidden md:flex">
                    <app-i class="text-[#1DA958] h-5 w-5 mr-[9px]" name="heroicons-solid:location-marker" />
                    <span class="tex-[#131313] font-normal leading-5 text-[14px]">
                        <slot name="location">
                            <p>{{ complex.city?.name }}, {{ complex.district?.name }}</p>
                            <p class="inline-block">{{ complex.address }}</p>
                        </slot>
                    </span>
                </p>

                <!-- devider -->
                <!-- desktop -->
                <div class="my-[17px] hidden md:block"><hr /></div>

                <!-- desktop -->
                <div class="hidden md:block">
                    <slot name="body">
                        <p class="flex items-center justify-between flex-wrap" v-for="(item, i) in complex?.apartments_summary" :key="`sum-${i}`">
                            <span class="text-[#8C8C8C] text-[14px] leading-4 font-normal">{{ item?.rooms }}-комн. от {{ item?.min_area }} м²</span>
                            <span class="flex-grow mx-1 border-b border-dashed self-stretch"></span>
                            <span class="text-[14px] font-medium leading-4 text-[#131313]">{{ format_thousands(item?.min_price) }} ₽</span>
                        </p>
                    </slot>
                </div>
            </div>

            <!-- desktop -->
            <div class="mt-auto p-[21px] bg-[#F4FAFF] text-sm hidden md:block">
                <p class="mb-[22px] flex items-center justify-between flex-wrap text-[#3478F6] font-[Inter]">
                    <slot name="foot-ad">
                        <span class="text-[13px] font-semibold leading-[15px]">{{ complex?.count_homes?.total }} квартир</span>
                        <span class="text-[14px] font-normal leading-4">от 64 335 ₽/мес</span>
                    </slot>
                </p>

                <NuxtLink :to="`/catalog/${complex?.id}`" :class="['block text-center py-4 font-[Raleway] rounded-[3px] border-[1.6px] text-[13px] leading-[15px] font-bold cursor-pointer border-[#FCBD00] text-[#131313] w-full z-50 relative hover-bg', whiteCta ? 'bg-white' : 'bg-transparent ']">
                    <!-- <button :class="['py-4 font-[Raleway] rounded-[3px] border-[1.6px] text-[13px] leading-[15px] font-bold cursor-pointer border-[#FCBD00] text-[#131313] w-full z-50 relative hover-bg', whiteCta ? 'bg-white' : 'bg-transparent ']"> -->
                    <p>{{ whiteCta ? "Узнать больше" : "Подробнее" }}</p>
                    <!-- </button> -->
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.wrapper {
    * {
        transition: all 200ms ease-out;
    }

    @include border-anm;

    @include break_point(768px) {
        .building-shadow {
            box-shadow: $md-box-shadow;
        }

        &:hover {
            .building-shadow {
                box-shadow: none !important;
            }

            .hover-bg {
                background-color: #fcbd00;
                color: white;
            }
        }
    }

    grid-column: span 12 / span 12;

    @include break_point(350px) {
        grid-column: span 6 / span 6;
    }

    @include break_point(637px) {
        padding-left: 2px;
        grid-column: span 4 / span 4;
    }

    @include break_point(1050px) {
        grid-column: span 3 / span 3;

        &.col-span-4-md-force {
            grid-column: span 4 / span 4;
        }
    }
}
</style>
