<script lang="ts" setup>
import Building from "~/assets/img/building.png";

withDefaults(defineProps<{ img?: string; actions?: boolean; underConstruction?: true; shadow?: true; whiteCta?: true }>(), {
    img: Building,
    actions: true,
});

const foo = () => {};

const isMatch = useMediaQuery("(max-width: 397px)");
</script>

<template>
    <div :class="['wrapper', $attrs.class]">
        <div :class="['building transition-all duration-300 md:rounded-[3px]', shadow ? 'building-shadow' : '']">
            <div class="relative img rounded-[5px] md:rounded-none md:rounded-t h-[120px] sm:h-44 md:h-[200px] w-full">
                <app-img class="rounded-[5px] md:rounded-b-none h-full w-full" :src="img" alt="" />

                <span class="absolute top-0 right-0 left-0 flex justify-between p-[9px] md:p-[13px]" v-if="actions">
                    <span class="relative flex items-center justify-center h-6 w-6 md:w-10 md:h-10 bg-[#E71F61] rounded-full">
                        <app-i name="heroicons-solid:phone" class="text-white absolute w-3 h-3 md:h-5 md:w-5" />
                    </span>

                    <span class="md:flex">
                        <span class="md:w-10 md:h-10 relative flex items-center justify-center md:bg-[#FAFCFE] md:rounded-full mb-[10px]">
                            <app-i name="heroicons-outline:star" class="text-white md:absolute md:text-[#3478F6] w-4 h-4 md:h-5 md:w-5" />
                        </span>
                        <span class="md:w-10 md:h-10 relative flex items-center justify-center md:bg-[#FAFCFE] md:rounded-full md:ml-[9px]">
                            <!-- <app-i name="ic:round-stacked-bar-chart" class="text-white md:absolute md:text-[#3478F6] w-4 h-4 md:h-5 md:w-5" /> -->
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.8" y="12.5234" width="1.84578" height="3.92941" rx="0.922892" fill="white" stroke="white" stroke-width="0.4" />
                                <rect x="5.31807" y="5.46431" width="1.84578" height="10.9882" rx="0.922892" fill="white" stroke="white" stroke-width="0.4" />
                                <rect x="9.83613" y="1.05269" width="1.84578" height="15.4" rx="0.922892" fill="white" stroke="white" stroke-width="0.4" />
                                <rect x="14.3542" y="8.99409" width="1.84578" height="7.45882" rx="0.922892" fill="white" stroke="white" stroke-width="0.4" />
                            </svg>
                        </span>
                    </span>
                </span>
            </div>

            <div :class="['px-[10px] md:px-[21px] text-sm pt-3 md:pt-[18px] pb-4', shadow ? '' : 'md:border-l-[1.6px] md:border-r-[1.6px] md:border-[#1da95826]']">
                <div class="flex justify-between flex-wrap mb-[5px] md:mb-[8px]">
                    <h2 class="font-normal uppercase leading-[11.74px] md:leading-[14px] font-[Raleway] text-[10px] text-xs text-[#4D4D4D]">
                        <slot name="description-up">ТПУ «ДМИТРОВСКАЯ</slot>
                    </h2>
                    <!-- desktop -->
                    <p v-if="underConstruction" class="text-[#1DA958] italic font-medium text-xs leading-[14px] hidden md:inline">Строится</p>
                </div>

                <h1 class="font-semibold md:font-bold text-[13px] md:text-[16px] text-[#131313] leading-[17px] md:leading-[19px] font-[Inter] md:mb-[13px]">
                    <slot name="description-middle">Жилой квартал «D1»</slot>
                </h1>

                <!-- mobile -->
                <p class="mt-[7px] text-[#3478F6] font-medium text-[12px] leading-[14.52px] md:hidden">
                    <slot name="price">от 10 335 млн ₽</slot>
                </p>

                <!-- desktop -->
                <p class="items-center justify-start hidden md:flex">
                    <app-i class="text-[#1DA958] h-5 w-5 mr-[9px]" name="heroicons-solid:location-marker" />
                    <span class="tex-[#131313] font-normal leading-5 text-[14px]">
                        <slot name="location">Ростов-на-Дону</slot>
                    </span>
                </p>

                <!-- devider -->
                <!-- desktop -->
                <div class="my-[17px] hidden md:block"><hr /></div>

                <!-- desktop -->
                <div class="hidden md:block">
                    <slot name="body">
                        <p class="flex items-center justify-between flex-wrap">
                            <span class="text-[#8C8C8C] text-[14px] leading-4 font-normal">1-комн. от 27 м²</span>
                            <span class="flex-grow mx-1 border-b border-dashed self-stretch"></span>
                            <span class="text-[14px] font-medium leading-4 text-[#131313]">10 233 450 ₽</span>
                        </p>
                        <p class="flex items-center justify-between flex-wrap my-3">
                            <span class="text-[#8C8C8C] text-[14px] leading-4 font-normal">2-комн. от 55 м²</span>
                            <span class="flex-grow mx-1 border-b border-dashed self-stretch"></span>
                            <span class="text-[14px] font-medium leading-4 text-[#131313]">14 233 450 ₽</span>
                        </p>
                        <p class="flex items-center justify-between flex-wrap">
                            <span class="text-[#8C8C8C] text-[14px] leading-4 font-normal">3-комн. от 63 м²</span>
                            <span class="flex-grow mx-1 border-b border-dashed self-stretch"></span>
                            <span class="text-[14px] font-medium leading-4 text-[#131313]">19 233 450 ₽</span>
                        </p>
                    </slot>
                </div>
            </div>

            <!-- desktop -->
            <div class="p-[21px] bg-[#F4FAFF] text-sm hidden md:block">
                <p class="mb-[22px] flex items-center justify-between flex-wrap text-[#3478F6] font-[Inter]">
                    <slot name="foot-ad">
                        <span class="text-[13px] font-semibold leading-[15px]">65 квартир</span>
                        <span class="text-[14px] font-normal leading-4">от 64 335 ₽/мес</span>
                    </slot>
                </p>

                <button @click="() => foo()" :class="['py-4 font-[Raleway] rounded-[3px] border-[1.6px] text-[13px] leading-[13px] font-bold cursor-pointer border-[#FCBD00] text-[#131313] w-full z-50 relative hover-bg', whiteCta ? 'bg-white' : 'bg-transparent ']">
                    <b>Подробнее</b>
                </button>
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
