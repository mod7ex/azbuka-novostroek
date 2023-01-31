<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg";
import { SECTIONS } from "~/constants";

defineEmits(["toggle"]);
</script>

<template>
    <app-width tag="header">
        <!-- Desktop header -->
        <div class="hidden header:flex desktop-section items-center pt-4 mb-[42px]">
            <NuxtLink :to="{ name: 'index' }">
                <app-logo :width="123" :height="60" />
            </NuxtLink>

            <ul class="ml-[71px] flex items-center">
                <li>
                    <button class="flex items-center justify-center w-10 h-10 relative border-[1.6px] border-[#1da95814] bg-[#FAFCFE] rounded-full star cursor-pointer">
                        <app-i class="absolute text-blue-500 md:w-4 md:h-4 w-3 h-3" name="heroicons-outline:star" />
                    </button>
                </li>

                <li class="px-[9px]">
                    <button class="flex items-center justify-center w-10 h-10 relative border-[1.6px] border-[#1da95814] bg-[#FAFCFE] rounded-full chart cursor-pointer">
                        <app-i class="absolute text-blue-500 md:w-4 md:h-4 w-3 h-3" name="ri:bar-chart-line" />
                    </button>
                </li>

                <li>
                    <button class="flex items-center h-10 px-3 relative border-[1.6px] border-[#1da95814] bg-[#FAFCFE] rounded-full location cursor-pointer">
                        <app-i class="text-blue-500 md:w-4 md:h-4 w-3 h-3 mr-2" name="heroicons-outline:location-marker" />
                        <span class="text-sm leading-5 font-normal font-[Inter] text-[#131313]">Ростов-на-Дону</span>
                    </button>
                </li>
            </ul>

            <ul class="ml-auto flex items-center">
                <li class="mx-[30px]">
                    <NuxtLink :to="{ name: 'index', hash: `#${SECTIONS.COMPLEXES}` }" class="uppercase text-sm font-extrabold leading-4 font-[Raleway]">Жилые комплексы</NuxtLink>
                </li>
                <li class="mx-[30px]">
                    <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-extrabold leading-4 font-[Raleway]">Квартиры</NuxtLink>
                </li>
                <li class="mx-[30px]">
                    <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-extrabold leading-4 font-[Raleway]">о нас</NuxtLink>
                </li>
                <li class="mx-[30px]">
                    <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-extrabold leading-4 font-[Raleway]">Контакты</NuxtLink>
                </li>
            </ul>

            <button class="ml-[41px] flex items-center justify-center w-10 h-10 relative border-[1.6px] border-[#1da95814] bg-[#FAFCFE] rounded-full cursor-pointer">
                <app-i class="absolute text-blue-500 md:w-4 md:h-4 w-3 h-3" name="heroicons-outline:phone-incoming" />
            </button>
        </div>

        <!-- Mobile + Tablet header -->
        <div class="mobile-section head flex header:hidden justify-between items-center mb-16 pt-3">
            <span class="head-left flex items-center justify-center">
                <NuxtLink :to="{ name: 'index' }" class="uppercase font-bold">
                    <app-img :src="Logo" alt="" width="57" height="28" />
                </NuxtLink>

                <button class="flex items-center h-9 cursor-pointer ml-3 md:ml-6 location">
                    <app-i class="w-3 h-4 mr-[6px] text-[#3478F6]" name="heroicons-outline:location-marker" />
                    <p class="text-xs leading-5 text-[#131313]">Ростов-на-Дону</p>
                </button>
            </span>

            <ul class="head-right flex items-center justify-end">
                <li class="ml-[6px]">
                    <button class="flex items-center justify-center w-7 h-7 relative border-[1.6px] border-[#1da95814] bg-white rounded-full p-1 star cursor-pointer">
                        <app-i class="absolute text-[#3478F6] w-[11.5px] h-[11.5px]" name="heroicons-outline:star" />
                    </button>
                </li>

                <li class="ml-[6px]">
                    <button class="flex items-center justify-center w-7 h-7 relative border-[1.6px] border-[#1da95814] bg-white rounded-full p-1 chart cursor-pointer">
                        <app-i class="absolute text-[#3478F6] w-[11.5px] h-[11.5px]" name="ri:bar-chart-line" />
                    </button>
                </li>

                <li class="ml-[6px]">
                    <button class="flex items-center justify-center w-7 h-7 relative border-[1.6px] border-[#1da95814] bg-[#3478F6] rounded-full p-1 chart cursor-pointer">
                        <app-i class="absolute text-white w-[11.5px] h-[11.5px]" name="heroicons-outline:phone-incoming" />
                    </button>
                </li>

                <li class="ml-[6px]">
                    <button @click="() => $emit('toggle')" class="flex items-center justify-center w-7 h-7 relative border-[1.6px] border-transparent menu cursor-pointer">
                        <app-i class="absolute text-[#131313] w-6 h-6 transform rotate-180" name="heroicons-solid:menu-alt-1" />
                    </button>
                </li>
            </ul>
        </div>
    </app-width>
</template>

<style lang="scss" scoped>
.head {
    flex-wrap: wrap;
    justify-content: center;

    .head-left {
        margin-bottom: 1em;
    }

    @include break_point(344px) {
        justify-content: space-between;

        .head-left {
            margin-bottom: 0;
        }
    }
}

.inner {
    .head {
        margin-bottom: 0;
    }
}
</style>
