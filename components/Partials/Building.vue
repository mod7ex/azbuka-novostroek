<script lang="ts" setup>
import Building from "~/assets/img/building.png";

const foo = () => {
    console.log("hello");
};

const isMatch = useMediaQuery("(max-width: 397px)");
</script>

<template>
    <div :class="[$style.wrapper]">
        <div :class="['building md:shadow-lg hover:shadow-none transition-all duration-300 md:rounded', $attrs.class]">
            <div class="relative img rounded-[5px] md:rounded-none md:rounded-t h-[120px] sm:h-44 md:h-48 w-full mb-3">
                <app-img class="rounded-[5px] md:rounded-[5px] h-full w-full" :src="Building" alt="" />

                <span class="absolute top-0 right-0 left-0 flex justify-between p-[9px]">
                    <span class="relative flex items-center justify-center h-6 w-6 bg-pink-600 rounded-full">
                        <app-i name="heroicons-solid:phone" class="text-white absolute w-3 h-3" />
                    </span>

                    <span>
                        <span class="mb-[10px] md:mb-0 relative flex items-center justify-center md:bg-white md:rounded-full">
                            <app-i name="heroicons-outline:star" class="text-white md:absolute md:text-blue-600 w-4 h-4" />
                        </span>
                        <span class="relative flex items-center justify-center md:bg-white md:rounded-full md:ml-2">
                            <app-i name="ic:round-stacked-bar-chart" class="text-white md:absolute md:text-blue-600 w-4 h-4" />
                        </span>
                    </span>
                </span>
            </div>

            <div class="px-[10px] text-sm">
                <div class="flex justify-between flex-wrap mb-[5px]">
                    <h2 class="font-normal uppercase leading-[11.74px] font-[Raleway] text-[10px] text-[#828282]">ТПУ «ДМИТРОВСКАЯ</h2>
                    <p class="text-green-800 italic hidden md:inline">Строится</p>
                </div>

                <h1 class="font-semibold text-[13px] text-[#131313] leading-[17px] font-[Inter]">Жилой квартал «D1»</h1>

                <!-- mobile -->
                <p class="mt-[7px] text-[#3478F6] font-medium text-[12px] leading-[14.52px] md:hidden">от 10 335 млн ₽</p>
                <!-- desktop -->
                <p class="items-center justify-start hidden md:flex">
                    <app-i class="text-green-600 h-5 w-5 mr-2" name="heroicons-solid:location-marker" />
                    <span>Ростов-на-Дону</span>
                </p>

                <!-- devider -->
                <div class="my-3 hidden md:block"><hr /></div>

                <div class="hidden md:block">
                    <p class="flex items-center justify-between flex-wrap">
                        <span class="text-gray-500">1-комн. от 27 м²</span>
                        <span class="flex-grow mx-1 border-b border-dashed self-stretch"></span>
                        <span>10 233 450 ₽</span>
                    </p>
                    <p class="flex items-center justify-between flex-wrap my-2">
                        <span class="text-gray-500">2-комн. от 55 м²</span>
                        <span class="flex-grow mx-1 border-b border-dashed self-stretch"></span>
                        <span>14 233 450 ₽</span>
                    </p>
                    <p class="flex items-center justify-between flex-wrap">
                        <span class="text-gray-500">3-комн. от 63 м²</span>
                        <span class="flex-grow mx-1 border-b border-dashed self-stretch"></span>
                        <span>19 233 450 ₽</span>
                    </p>
                </div>
            </div>

            <div class="p-4 bg-blue-50 text-sm hidden md:block">
                <p class="mb-3 flex items-center justify-between flex-wrap text-blue-600">
                    <b>65 квартир</b>
                    <span>от 64 335 ₽/мес</span>
                </p>
                <Button @click="() => foo()" transparent color="yellow" class="w-full building-see-details transition-all duration-300 z-50 relative">
                    <b>Подробнее</b>
                </Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    margin-bottom: 26px;

    @include border-anm;

    &:hover {
        .building-see-details {
            --tw-bg-opacity: 1;
            background-color: rgba(251, 191, 36, var(--tw-bg-opacity));
            color: white;
        }

        .building {
            box-shadow: none !important;
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
    }
}
</style>
