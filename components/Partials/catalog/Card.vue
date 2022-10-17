<script setup lang="ts">
import Building from "~/assets/img/catalog-building.png";
</script>

<template>
    <article :class="['bg-[#3478F6] rounded-[5px]', $attrs.class]">
        <div class="rounded-t-[5px] relative">
            <app-img :src="Building" class="rounded-t-[5px]" />
            <div class="overlay p-[21px] flex flex-col justify-between">
                <div class="flex items-center justify-start gap-[6px]">
                    <button class="flex items-center justify-center w-[28px] h-[28px] relative bg-[#E71F61] rounded-full cursor-pointer">
                        <app-i class="absolute text-white w-3 h-3" name="ic:round-local-phone" />
                    </button>
                    <button class="flex items-center justify-center w-[28px] h-[28px] relative bg-[#1DA958] rounded-full cursor-pointer">
                        <app-i class="absolute text-white w-3 h-3" name="zondicons:share-alt" />
                    </button>
                </div>

                <div class="flex items-center justify-between">
                    <button class="bg-[#FCBD00] text-white py-[7px] px-3 rounded-[60px] text-xs leading-[13px] font-bold font-[Raleway]">Узнать об акциях</button>
                    <ul class="flex items-center justify-center gap-[6px]">
                        <ol>
                            <button class="flex items-center justify-center w-[28px] h-[28px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                                <app-i class="absolute text-[#3478F6] w-3 h-3" name="heroicons-outline:star" />
                            </button>
                        </ol>
                        <ol>
                            <button class="flex items-center justify-center w-[28px] h-[28px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                                <app-i class="absolute text-[#3478F6] w-3 h-3" name="ri:bar-chart-line" />
                            </button>
                        </ol>
                        <ol>
                            <button class="flex items-center justify-center w-[28px] h-[28px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                                <app-i class="absolute text-[#3478F6] w-4 h-4" name="heroicons-outline:photograph" />
                            </button>
                        </ol>
                    </ul>
                </div>
            </div>
        </div>

        <div class="text-white p-[29px] pt-5 font-[Inter]">
            <h1 class="mb-[2px] text-xl font-bold leading-[30px]">Квартал “Любимов 23”</h1>
            <p class="flex items-center mb-[22px]">
                <app-i class="w-3 h-[15px] mr-[13px]" name="heroicons-outline:location-marker" />
                <span class="text-base leading-6 font-normal">Ростов-на-Дону, Западный</span>
            </p>

            <ul class="text-[15px] font-medium leading-[18px]">
                <li class="mb-[17px]">Описание</li>
                <li class="mb-[17px]">Характеристики</li>
                <li class="mb-[17px]">Квартиры <b>(69)</b></li>
                <li class="mb-[17px]">Ход строительства <b>(30.03.2021)</b></li>
                <li class="mb-[17px]">Ипотека</li>
                <li class="mb-[17px]">Акции</li>
                <li class="mb-[17px]">Отзывы <b>(31)</b></li>
                <li class="mb-[17px]">Вопрос-ответ <b>(26)</b></li>
            </ul>
        </div>
    </article>
</template>
