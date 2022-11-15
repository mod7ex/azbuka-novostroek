<script setup lang="ts">
import Building from "~/assets/img/catalog-building-md.png";
import BuildingA from "~/assets/img/gallery-building_a.png";
import BuildingB from "~/assets/img/gallery-building_b.png";

import Document from "~/assets/svg/description/document.svg";
import Buildings from "~/assets/svg/description/buildings.svg";
import Etage from "~/assets/img/etages.png";
import Apartments from "~/assets/svg/description/apartments.svg";
import Height from "~/assets/svg/description/height.svg";
import Type from "~/assets/svg/description/type.svg";
import Paint from "~/assets/svg/description/paint.svg";
import Parking from "~/assets/svg/description/parking.svg";
import Elevator from "~/assets/svg/description/elevator.svg";
import BuildingSvg from "~/assets/svg/description/building.svg";

const descriptionItems = [
    {
        img: Document,
        light: "Тип договора",
        bold: "ДДУ, 214 ФЗ",
    },
    {
        img: Buildings,
        light: "Класс недвижимости",
        bold: "Комфорт",
    },
    {
        img: BuildingSvg,
        light: "Число корпусов",
        bold: "12",
    },
    {
        img: Etage,
        light: "Этажность",
        bold: "от 7 до 16",
    },
    {
        img: Apartments,
        light: "Число квартир",
        bold: "5 967",
    },
    {
        img: Height,
        light: "Высота потолков",
        bold: "2.8 м",
    },
    {
        img: Type,
        light: "Тип дома",
        bold: "Кирпично монолитный",
    },
    {
        img: Paint,
        light: "Отделка",
        bold: "Черновая, под ключ",
    },
    {
        img: Parking,
        light: "Паркинг, машиноместа",
        bold: "48 – открытый,<br />есть подземный",
    },
    {
        img: Elevator,
        light: "Лифты",
        bold: "5 пассажирских",
    },
];
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pt-[40px] md:pb-[60px] ']">
            <template #head>
                <h1 class="text-[26px] font-bold leading-9 font-[Raleway] text-[#131313]">Описание жилого комплекса</h1>
            </template>

            <div class="gallery mb-[25px] md:mb-10 mt-5 md:mt-[15px] md:flex md:gap-[10px] md:items-stretch">
                <div class="min-h-[254px] current-img rounded-[5px] md:flex-grow" :style="{ backgroundImage: `url(${Building})` }"></div>

                <ul class="flex items-stretch justify-center md:justify-between gap-1 mt-3 md:mt-0 md:flex-col">
                    <li class="flex items-center justify-center">
                        <button class="md:hidden">
                            <app-i name="tabler:chevron-left" />
                        </button>
                        <button class="hidden md:block">
                            <app-i name="bx:chevron-up" />
                        </button>
                    </li>
                    <li class="img items-stretch justify-center hidden md:flex">
                        <button><app-img :src="Building" class="h-full rounded-[5px]" /></button>
                    </li>
                    <li class="img flex items-stretch justify-center">
                        <button><app-img :src="Building" class="h-full rounded-[5px]" /></button>
                    </li>
                    <li class="img flex items-stretch justify-center">
                        <button><app-img :src="BuildingA" class="h-full rounded-[5px]" /></button>
                    </li>
                    <li class="img flex items-stretch justify-center">
                        <button><app-img :src="BuildingB" class="h-full rounded-[5px]" /></button>
                    </li>
                    <li class="flex items-center justify-center">
                        <button class="md:hidden">
                            <app-i name="tabler:chevron-right" />
                        </button>
                        <button class="hidden md:block">
                            <app-i name="bx:chevron-down" />
                        </button>
                    </li>
                </ul>
            </div>

            <ul class="grid grid-cols-2 mb-[18px] md:mb-11 md:gap-y-10">
                <li
                    v-for="(item, i) in descriptionItems"
                    :key="i"
                    :class="[
                        'pb-[17px] md:pb-0 col-span-1',
                        // 'border-b md:border-b-0 border-[#00000014]'
                        i & 1 ? '' : 'border-r md:border-r-0',
                        i > 2 ? 'py-[10px] md:py-0' : '',
                        i + 1 == descriptionItems.length ? 'justify-start' : 'md:justify-start justify-end',
                    ]"
                >
                    <div class="flex items-center flex-col md:flex-row">
                        <div class="mb-3 md:mb-0 md:mr-[26px] w-[44px] h-[44px]">
                            <app-img :src="item.img" class="w-full h-full" />
                        </div>

                        <div class="text-center md:text-left font-[Inter] leading-[17px] md:leading-5">
                            <p class="text-xs md:text-[14px] font-normal text-[#878787] mb-[5px]" v-html="item.light"></p>
                            <p class="text-[13px] font-semibold md:text-base md:font-bold" v-html="item.bold"></p>
                        </div>
                    </div>
                </li>
            </ul>

            <template #foot>
                <!-- <dashed-devider class="border-[#00000014] mb-8 hidden md:block" /> -->
                <hr class="border-[#00000014] mb-8 hidden md:block" />

                <div class="text-[13px] md:text-[14px] mb-[34px]">
                    <p class="leading-6 font-normal font-[Inter] text-[#666666] mb-[17px] md:mb-[42px]">
                        ЖК West Garden возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность. Застройщиком выступает компания «Интеко».
                    </p>
                    <a href="" class="text-[#3478F6] leading-3 flex items-center justify-start">
                        <span class="mr-[10px]">Читать подробнее </span>
                        <app-i name="bx:chevron-down" class="" />
                        <!-- <span class="text-[30px] -mt-[7px]">&#8964;</span> -->
                    </a>
                </div>

                <dashed-devider class="md:hidden" />
            </template>
        </NuxtLayout>
    </div>
</template>

<style lang="scss">
.gallery {
    .current-img {
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 100% 100%;
    }

    ul {
        li {
            &.img {
                // height: ;
            }

            cursor: pointer;
            color: #8c8c8c;
            max-width: 93px;
            img {
                width: 100%;
            }
        }
    }
}
</style>
