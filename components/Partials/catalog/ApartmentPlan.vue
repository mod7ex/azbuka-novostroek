<script setup lang="ts">
import PlanA from "~/assets/img/plan_1.png";
</script>

<template>
    <article :class="['flex items-center justify-center flex-col pt-6 rounded-[5px] border border-[#00000014] px-[21px] pb-[31px]', $attrs.class]">
        <div class="font-[Inter] text-center mb-[7px]">
            <h1 class="text-[18px] font-semibold leading-6 mb-[6px]">Квартира №238</h1>
            <p class="font-medium text-[15px] leading-[18px] text-[#878787]">2 к. 64 м2 9 этаж</p>
        </div>

        <app-img :src="PlanA" />

        <div class="mt-4 mb-[29px]">
            <header class="font-[Inter] mb-[25px]">
                <div class="flex items-center justify-center gap-[13px]">
                    <h1 class="font-bold text-[18px] leading-[21px]">5 200 000 ₽</h1>
                    <p class="font-normal text-[14px] leading-4 text-[#878787]">95 000 ₽/ м2</p>
                </div>

                <div class="flex items-center justify-center gap-[13px] text-[#1DA958]">
                    <button class="text-[14px] leading-4 font-normal mb-[6px] flex items-center">
                        <app-i name="ic:round-arrow-drop-down" />
                        <span>357 000 ₽</span>
                    </button>
                    <p class="bg-[#D2EEDE] py-[3px] px-[5px] font-medium text-xs leading-[14px] rounded-[3px]">Следить за ценой</p>
                </div>
            </header>

            <ul class="text-[14px] leading-4 font-medium font-[Raleway]">
                <li class="flex items-end justify-between mb-4">
                    <p class="text-[#878787]">Расчетная площадь</p>
                    <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                    <p>77.08 м2</p>
                </li>
                <li class="flex items-end justify-between mb-4">
                    <p class="text-[#878787]">Жилая площадь</p>
                    <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                    <p>41.20 м2</p>
                </li>
                <li class="flex items-end justify-between mb-4">
                    <p class="text-[#878787]">Площадь кухни</p>
                    <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                    <p>13.69 м2</p>
                </li>
                <li class="flex items-end justify-between mb-4">
                    <p class="text-[#878787]">Количество лоджий</p>
                    <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                    <p>2</p>
                </li>
                <li class="flex items-end justify-between mb-4">
                    <p class="text-[#878787]">Площадь лоджий</p>
                    <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                    <p>7.00 м2</p>
                </li>
            </ul>
        </div>

        <div class="text-white text-[13px] font-bold leading-[13px] font-[Raleway] flex items-center justify-center gap-1">
            <Button label="Забронировать" class="bg-[#1DA958] py-[13px] px-[15px]" />
            <Button label="Рассчитать ипотеку" class="bg-[#FCBD00] py-[13px] px-[15px] whitespace-nowrap" />
        </div>
    </article>
</template>
