<script setup lang="ts">
import PlanA from "~/assets/img/plan_1.png";
</script>

<template>
    <article :class="['flex items-center justify-center md:flex-wrap md:justify-start flex-col md:flex-row md:items-start pt-6 md:pt-[30px] rounded-[5px] border md:border-[1.6px] border-[#00000014] md:border-[#1da95826] px-[21px] pb-[31px]', $attrs.class]">
        <div class="font-[Inter] text-center mb-[7px] md:hidden">
            <h1 class="text-[18px] font-semibold leading-6 mb-[6px]">Квартира №238</h1>
            <p class="font-medium text-[15px] leading-[18px] text-[#878787]">2 к. 64 м2 9 этаж</p>
        </div>

        <app-img :src="PlanA" class="mx-auto" />

        <div class="md:flex-grow">
            <div class="mt-4 mb-[29px] md:mb-[33px]">
                <header class="font-[Inter] mb-[25px] md:mb-[20px] md:flex md:items-start md:justify-between md:flex-wrap">
                    <div class="mb-[7px] hidden md:inline-block">
                        <h1 class="text-[18px] font-semibold leading-6 mb-[6px]">Квартира №238</h1>
                        <p class="font-medium text-[15px] leading-[18px] text-[#878787]">2 к. 64 м2 9 этаж</p>
                    </div>

                    <div>
                        <div class="flex items-center justify-center gap-[13px] md:flex md:flex-col md:gap-[2.3px] md:items-end md:mb-[6px]">
                            <h1 class="font-bold text-[18px] md:text-[21px] leading-[21px] md:flex md:items-center md:gap-[6px]">
                                <button class="text-[14px] md:text-[13px] leading-4 md:leading-[15px] font-normal mb-[6px] hidden md:flex items-center text-[#1DA958]">
                                    <app-i name="ic:round-arrow-drop-down" />
                                    <span>357 000 ₽</span>
                                </button>

                                <p>5 200 000 ₽</p>
                            </h1>
                            <p class="font-normal text-[14px] leading-4 text-[#878787]">95 000 ₽/ м2</p>
                        </div>

                        <div class="flex items-center justify-center md:justify-end gap-[13px] text-[#1DA958]">
                            <button class="text-[14px] leading-4 font-normal mb-[6px] flex items-center md:hidden">
                                <app-i name="ic:round-arrow-drop-down" />
                                <span>357 000 ₽</span>
                            </button>
                            <p class="bg-[#D2EEDE] py-[3px] px-[5px] font-medium text-xs leading-[14px] rounded-[3px]">Следить за ценой</p>
                        </div>
                    </div>
                </header>

                <div class="text-[14px] leading-4 font-medium md:flex md:flex-wrap md:items-start md:justify-between md:gap-x-[35px] md:gap-y-4">
                    <ul class="md:flex-grow">
                        <li class="flex items-end justify-between mb-4">
                            <p class="text-[#878787] font-[Raleway]">Расчетная площадь</p>
                            <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                            <p class="font-[Inter]">77.08 м2</p>
                        </li>
                        <li class="flex items-end justify-between mb-4">
                            <p class="text-[#878787] font-[Raleway]">Жилая площадь</p>
                            <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                            <p class="font-[Inter]">41.20 м2</p>
                        </li>
                        <li class="flex items-end justify-between mb-4 md:mb-0">
                            <p class="text-[#878787] font-[Raleway]">Площадь кухни</p>
                            <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                            <p class="font-[Inter]">13.69 м2</p>
                        </li>
                    </ul>
                    <ul class="md:flex-grow">
                        <li class="flex items-end justify-between mb-4">
                            <p class="text-[#878787] font-[Raleway]">Количество лоджий</p>
                            <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                            <p class="font-[Inter]">2</p>
                        </li>
                        <li class="flex items-end justify-between">
                            <p class="text-[#878787] font-[Raleway]">Площадь лоджий</p>
                            <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                            <p class="font-[Inter]">7.00 м2</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="text-white flex items-center justify-center md:justify-start gap-1 md:gap-[10px]">
                <Button label="Забронировать" class="bg-[#1DA958] py-[13px] px-[20px] text-[15px] font-bold leading-[17px] font-[Raleway]" />
                <Button label="Рассчитать ипотеку" class="bg-[#FCBD00] py-[13px] px-[20px] whitespace-nowrap text-[15px] font-bold leading-[17px] font-[Raleway]" />
            </div>
        </div>
    </article>
</template>
