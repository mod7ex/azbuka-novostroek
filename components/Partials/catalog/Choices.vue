<script setup lang="ts">
import Building from "~/assets/img/catalog-building-md.png";
import BuildingA from "~/assets/img/gallery-building_a.png";
import BuildingB from "~/assets/img/gallery-building_b.png";

const choices = ["1 - Дом  (1 кв. 2022)", "2 - Дом  (2 кв. 2022)", "3 - Дом  (2 кв. 2022)", "4 - Дом  (2 кв. 2022)", "5 - Дом  (2 кв. 2022)", "6 - Дом  (2 кв. 2022)"];

const current = shallowRef(0);

const options = ["Характеристики", "Документы", "Ход строительства"];
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px]']">
            <template #head>
                <h1 class="text-[26px] md:text-[24px] font-bold md:font-extrabold leading-9 md:leading-[28px] font-[Raleway] text-[#131313]">Выбор дома</h1>
            </template>

            <ul class="mt-[22px] mb-8 md:mb-[50px] grid grid-cols-2 md:flex md:flex-wrap gap-[10px]">
                <li v-for="(choice, i) in choices" :key="i" class="col-span-1 w-full md:w-fit">
                    <button :class="['py-2 w-full rounded-[3px] px-[18px] font-medium text-[13px] md:text-base md:leading-[19px] leading-[15px]', i == 0 ? 'bg-[#1DA958] text-white' : 'bg-[#D2EEDE]']">{{ choice }}</button>
                </li>
            </ul>

            <x-scroll-header :choices="options" v-model="current" class="mb-[21px]" />

            <div class="mb-[28px] md:mb-0 md:grid md:grid-cols-2 md:gap-[55px]" v-if="current === 0">
                <ul class="md:col-span-1">
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Застройщик</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">ОOО “Застройщик”</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Город</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Ростов-на-Дону</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Район</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Северный</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Адрес</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Евдокимова 25б</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Этап строительства</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Отделка</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Срок здачи</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">4 квартал 2021 года</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Класс дома</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Комфорт</p>
                    </li>
                </ul>
                <ul class="md:col-span-1">
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Технология строительства</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">есть</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Этажность</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">есть</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Высота потолков</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">да</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Пассажирский лифт</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">подземная</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Грузовой лифт</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">бизнес</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Закрытая территория</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">4.5</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between">
                        <p class="font-normal text-[#878787]">Наземный паркинг</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">4.5</p>
                    </li>
                </ul>
            </div>

            <div class="mb-3" v-if="current === 2">
                <div class="relative h-44 overflow-x-scroll no-scroll-thum mb-5">
                    <ul class="absolute top-0 bottom-0 flex items-stretch gap-1">
                        <li class="w-56 h-36">
                            <app-img :src="BuildingA" class="rounded-[5px] mb-2" fill />
                            <p class="font-[Inter] text-[14px] leading-5 pl-6">
                                <span class="font-bold">Март</span>
                                <span class="ml-[5px] text-[#878787] font-normal">2022</span>
                            </p>
                        </li>
                        <li class="relative h-36">
                            <button class="text-white w-[40px] h-[40px] top-0 bottom-0 my-auto -mx-5 absolute z-50 bg-[#1DA958] rounded-[2px]">
                                <app-i name="material-symbols:arrow-right-alt-rounded" />
                            </button>
                        </li>
                        <li class="w-56 h-36">
                            <app-img :src="Building" class="rounded-[5px] mb-2" fill />
                            <p class="font-[Inter] text-[14px] leading-5 pl-6">
                                <span class="font-bold">Апрель</span>
                                <span class="ml-[5px] text-[#878787] font-normal">2022</span>
                            </p>
                        </li>
                        <li class="relative h-36">
                            <button class="text-white w-[40px] h-[40px] top-0 bottom-0 my-auto -mx-5 absolute z-50 bg-[#1DA958] rounded-[2px]">
                                <app-i name="material-symbols:arrow-right-alt-rounded" />
                            </button>
                        </li>
                        <li class="w-56 h-36">
                            <app-img :src="BuildingB" class="rounded-[5px] mb-2" fill />
                            <p class="font-[Inter] text-[14px] leading-5 pl-6">
                                <span class="font-bold">Март</span>
                                <span class="ml-[5px] text-[#878787] font-normal">2022</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div class="bg-[#F9F9F9] rounded-[3px] py-[7px] px-[15px]">
                    <ul class="flex items-center justify-between">
                        <li class="flex items-center justify-start">
                            <p class="mr-[14px] font-[Inter] text-[13px] font-medium leading-[15px]">Рассказать:</p>

                            <button class="flex items-center justify-center w-7 h-7 relative border-[1.6px] border-[#1da95814] bg-white rounded-full p-1 star cursor-pointer">
                                <app-i class="absolute text-[#3478F6] w-[11.5px] h-[11.5px]" name="akar-icons:vk-fill" />
                            </button>
                        </li>
                        <li>
                            <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#E71F61] rounded-full cursor-pointer">
                                <app-i class="absolute text-white w-3 h-3 md:w-5 md:h-5" name="ic:round-local-phone" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <template #foot> <dashed-devider class="md:hidden" /> </template>
        </NuxtLayout>
    </div>
</template>
