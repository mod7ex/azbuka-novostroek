<script setup lang="ts">
import { SECTIONS } from "~/constants";

defineEmits(["close"]);
</script>

<template>
    <app-width tag="nav">
        <div class="flex justify-between items-center mb-[73px]">
            <NuxtLink @click="() => $emit('close')" :to="{ name: 'index' }" class="uppercase text-sm font-bold">
                <app-logo :width="83" :height="41" />
            </NuxtLink>

            <button @click="() => $emit('close')" class="cursor-pointer">
                <app-i class="w-5 h-5 text-[#BDBDBD]" name="material-symbols:close" />
            </button>
        </div>

        <!-- 20 + 29 = 49 -->

        <div class="pl-[29px]">
            <ul class="mb-[59px]">
                <li class="mb-3">
                    <NuxtLink @click="() => $emit('close')" :to="{ name: 'index', hash: `#${SECTIONS.COMPLEXES}` }" :external="true" class="text-[#131313] uppercase text-base leading-[18px] font-extrabold font-[Raleway]"> Жилые комплексы </NuxtLink>
                </li>
                <li class="mb-3">
                    <NuxtLink @click="() => $emit('close')" :to="{ name: 'index' }" class="text-[#131313] uppercase text-base leading-[18px] font-extrabold font-[Raleway]"> Квартиры </NuxtLink>
                </li>
                <li class="mb-3">
                    <NuxtLink @click="() => $emit('close')" :to="{ name: 'index' }" class="text-[#131313] uppercase text-base leading-[18px] font-extrabold font-[Raleway]"> о нас </NuxtLink>
                </li>
                <li class="mb-3">
                    <NuxtLink @click="() => $emit('close')" :to="{ name: 'index' }" class="text-[#131313] uppercase text-base leading-[18px] font-extrabold font-[Raleway]"> Контакты </NuxtLink>
                </li>
            </ul>
            <span class="flex items-center">
                <button class="flex items-center py-[10px] px-5 relative border-[1.6px] border-[#1da95814] bg-[#FAFCFE] rounded-full cursor-pointer">
                    <app-i class="text-blue-500 w-3 h-[15px] mr-[9px]" name="heroicons-outline:location-marker" />
                    <span class="font-normal text-[14px] leading-5 text-[#131313] font-[Inter]">Ростов-на-Дону</span>
                </button>
                <button class="flex items-center justify-center w-10 h-10 relative border-[1.6px] border-[#1da95814] bg-[#3478F6] rounded-full p-1 ml-[10px] sm:mx-2 cursor-pointer">
                    <app-i class="absolute text-white w-3 h-[15px]" name="heroicons-outline:phone-incoming" />
                </button>
            </span>
        </div>
    </app-width>
</template>
