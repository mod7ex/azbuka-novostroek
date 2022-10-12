<script setup lang="ts">
import Building from "~/assets/img/catalog-building.png";
import BuildingA from "~/assets/img/gallery-building_a.png";
import BuildingB from "~/assets/img/gallery-building_b.png";

import Document from "~/assets/svg/description/document.svg";
import Buildings from "~/assets/svg/description/buildings.svg";
import Etage from "~/assets/svg/description/etage.svg";
import Apartments from "~/assets/svg/description/apartments.svg";
import Height from "~/assets/svg/description/height.svg";
import Type from "~/assets/svg/description/type.svg";
import Paint from "~/assets/svg/description/paint.svg";
import Parking from "~/assets/svg/description/parking.svg";
import Elevator from "~/assets/svg/description/elevator.svg";

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
        img: Etage,
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
        bold: "48 – открытый,есть подземный",
    },
    {
        img: Elevator,
        light: "Лифты",
        bold: "5 пассажирских",
    },
];
</script>

<template>
    <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
        <template #head>
            <h1 class="text-[26px] font-bold leading-9 font-[Raleway] text-[#131313]">Описание жилого комплекса</h1>
        </template>

        <div class="gallery mb-[25px] mt-[20px]">
            <app-img :src="Building" class="rounded-[5px]" />

            <ul class="flex items-center justify-between mt-3">
                <li>
                    <button><b>&lt;</b></button>
                </li>
                <li>
                    <button><app-img :src="Building" class="w-9 rounded-[5px]" /></button>
                </li>
                <li>
                    <button><app-img :src="BuildingA" class="w-9 rounded-[5px]" /></button>
                </li>
                <li>
                    <button><app-img :src="BuildingB" class="w-9 rounded-[5px]" /></button>
                </li>
                <li>
                    <button><b>&gt;</b></button>
                </li>
            </ul>
        </div>

        <ul class="grid grid-cols-2 mb-[18px]">
            <li v-for="(item, i) in descriptionItems" :key="i" :class="['flex items-center justify-center flex-col pb-[17px] col-span-1 border-b border-[#00000014]', i & 1 ? '' : 'border-r', i > 2 ? 'py-[10px]' : '']">
                <app-img :src="item.img" class="mb-3" />

                <div class="text-center font-[Inter] leading-[17px]">
                    <p class="text-xs font-normal text-[#878787] mb-[5px]">{{ item.light }}</p>
                    <p class="text-[13px] font-semibold">{{ item.bold }}</p>
                </div>
            </li>
        </ul>

        <template #foot>
            <div class="text-[13px] mb-[34px]">
                <p class="leading-6 font-normal font-[Inter] text-[#666666] mb-[17px]">
                    ЖК West Garden возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность. Застройщиком выступает компания «Интеко».
                </p>
                <a href="" class="text-[#3478F6] leading-3 flex items-start justify-start">
                    <span class="mr-[10px]">Читать подробнее </span>
                    <span class="text-[30px] -mt-[7px]">&#8964;</span>
                </a>
            </div>

            <dashed-devider />
        </template>
    </NuxtLayout>
</template>

<style lang="scss">
.gallery {
    ul {
        li {
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
