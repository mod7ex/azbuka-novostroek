<script setup lang="ts">
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

import { stripHTMLPTag, firstFewWords, getNestedValue } from "~/utils";

const props = defineProps<{ id?: string; complex?: any }>();

const [isExpanded, toggle] = useToggle(false);

const descriptionText = computed(() => {
    const _description = props?.complex?.description;
    return isExpanded.value ? _description : firstFewWords(stripHTMLPTag(_description));
});

const images = props.complex?.images ?? [];

const { current, next, previous, pick } = useSpinner(images.length);

const desc = [
    {
        img: Document,
        light: "Тип договора",
        keys: ["_"],
    },
    {
        img: Buildings,
        light: "Класс недвижимости",
        keys: ["_"],
    },
    {
        img: BuildingSvg,
        light: "Число корпусов",
        keys: ["count_homes", "total"],
    },
    {
        img: Etage,
        light: "Этажность",
        keys: ["_"],
    },
    {
        img: Apartments,
        light: "Свободно квартир",
        keys: ["count_free_apartments"],
    },
    {
        img: Height,
        light: "Высота потолков",
        keys: ["_"],
    },
    {
        img: Type,
        light: "Тип дома",
        keys: ["_"],
    },
    {
        img: Paint,
        light: "Отделка",
        keys: ["_"],
    },
    {
        img: Parking,
        light: "Паркинг, машиноместа",
        keys: ["_"],
    },
    {
        img: Elevator,
        light: "Лифты",
        keys: ["_"],
    },
];

const descriptionItems = computed(() => {
    const complex = props.complex ?? {};

    return desc.map(({ img, keys, light }, key) => {
        return {
            key,
            img,
            light,
            bold: getNestedValue(complex, keys) ?? "Не заполнено",
        };
    });
});

const { scroll, targetRef } = useScroll();

const _next = () => {
    scroll({ top: 300 });
    next();
};

const _previous = () => {
    scroll({ top: -300 });
    previous();
};
</script>

<template>
    <div :id="id">
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pt-[40px] md:pb-[60px]']">
            <template #head>
                <h1 class="text-[26px] font-bold leading-9 font-[Raleway] text-[#131313]">Описание жилого комплекса</h1>
            </template>

            <div class="gallery mb-[25px] md:mb-10 mt-5 md:mt-[15px] md:flex md:gap-[10px] md:items-stretch">
                <div class="h-[254px] md:h-[365px] current-img rounded-[5px] md:flex-grow" :style="{ backgroundImage: `url(${images[current]?.url})` }"></div>

                <div class="max-h-[365px] flex items-stretch justify-center md:justify-between gap-1 mt-3 md:mt-0 md:flex-col">
                    <button @click="() => _previous()">
                        <span class="md:hidden"><app-i name="tabler:chevron-left" /></span>
                        <span class="hidden md:inline"><app-i name="tabler:chevron-up" /></span>
                    </button>

                    <ul ref="targetRef" class="flex items-stretch justify-center md:justify-between gap-2 md:flex-col overflow-x-scroll overflow-y-scroll no-scroll-thum">
                        <li class="img items-stretch justify-center md:flex" v-for="({ url }, i) in images" :key="i">
                            <button class="h-16 w-24 rounded-[5px] border-2" :class="i === current ? 'border-red-600' : 'border-transparent'" @click="() => pick(i)"><app-img :src="url" fill class="rounded-[5px]" /></button>
                        </li>
                    </ul>

                    <li class="flex items-center justify-center">
                        <button @click="() => _next()">
                            <span class="md:hidden"><app-i name="tabler:chevron-right" /></span>
                            <span class="hidden md:inline"><app-i name="bx:chevron-down" /></span>
                        </button>
                    </li>
                </div>
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
                            <p class="text-[13px] font-semibold md:text-base md:font-bold" :key="`${item.key}-item`">
                                {{ item.bold }}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>

            <template #foot>
                <!-- <dashed-devider class="border-[#00000014] mb-8 hidden md:block" /> -->
                <hr class="border-[#00000014] mb-8 hidden md:block" />

                <div class="text-[13px] md:text-[14px] mb-[34px]">
                    <div :class="['description-content leading-6 font-normal font-[Inter] text-[#666666] mb-[17px] md:mb-[42px]']" v-html="descriptionText"></div>

                    <a @click="() => toggle()" href="javascript:void(0)" class="text-[#3478F6] leading-3 flex items-center justify-start">
                        <span class="mr-[10px]">{{ isExpanded ? "Cкрыть" : "Читать подробнее" }} </span>
                        <app-i :name="`bx:chevron-${isExpanded ? 'up' : 'down'}`" class="" />
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
            cursor: pointer;
            color: #8c8c8c;
            max-width: 93px;
        }
    }
}
</style>
