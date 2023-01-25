<script setup lang="ts">
import { format_thousands } from "~/utils";

defineProps<{ apartment?: any }>();

const areaLabel = (v, flbk = "_") => {
    if (v == null) return flbk;
    else return `${v} м2`;
};

const { preview } = useImgPreview();
</script>

<template>
    <article :class="['w-[334px] rounded-[5px] border-[1.6px] border-[#00000014] md:border-[#1da95826]', $attrs.class]">
        <div class="h-[215px] bg-[#F4FAFF] relative">
            <app-img :src="apartment?.layout_url" class="mx-auto h-full" />
            <button v-if="apartment?.layout_url" @click="() => preview(apartment?.layout_url)" class="hover:bg-gray-900 transition-all duration-300 opacity-20 absolute top-0 left-0 right-0 bottom-0 cursor-pointer"></button>
        </div>

        <div class="pt-[14px] px-[22px]">
            <ul class="mb-[9px] text-xs leading-[14.5px] flex items-center justify-between">
                <li class="font-normal text-[#4D4D4D]">{{ apartment?.count_rooms }} комн. №{{ apartment?.number }}</li>
                <li class="text-[#1DA958] font-medium italic font-[Inter]">
                    <slot name="stage"></slot>
                </li>
            </ul>

            <div class="flex items-end justify-start font-[Inter] mb-[15px]">
                <p class="font-bold text-base leading-[21px] text-[#131313]">{{ format_thousands(apartment?.price) }} ₽</p>
                <p :class="['flex items-center justify-center font-normal text-[14px] leading-4', apartment?.is_grow_last_price ? 'text-[red]' : 'text-[#1DA958]']">
                    <app-i name="ic:round-arrow-drop-down" :class="[apartment?.is_grow_last_price ? 'rotate-180' : '']" />
                    <span>{{ format_thousands(apartment?.difference_last_price ?? 0) }} ₽</span>
                </p>
            </div>

            <div class="divide-y px-3">
                <hr />
            </div>

            <ul class="pt-[10px] pb-[15px]">
                <li class="font-[Inter] text-[14px] leading-[17px] flex justify-between items-center mb-3">
                    <span class="font-normal text-[#878787]">Цена за м²</span>
                    <span class="font-medium">{{ format_thousands(apartment?.price_area) }} ₽</span>
                </li>
                <li class="font-[Inter] text-[14px] leading-[17px] flex justify-between items-center mb-3">
                    <span class="font-normal text-[#878787]">Площадь</span>
                    <span class="font-medium">{{ areaLabel(apartment?.area_total) }}</span>
                </li>
                <li class="font-[Inter] text-[14px] leading-[17px] flex justify-between items-center mb-3">
                    <span class="font-normal text-[#878787]">Жилая</span>
                    <span class="font-medium">{{ areaLabel(apartment?.area_living) }}</span>
                </li>
                <li class="font-[Inter] text-[14px] leading-[17px] flex justify-between items-center mb-3">
                    <span class="font-normal text-[#878787]">Кухня</span>
                    <span class="font-medium">{{ areaLabel(apartment?.area_kitchen) }}</span>
                </li>
                <li class="font-[Inter] text-[14px] leading-[17px] flex justify-between items-center mb-3">
                    <span class="font-normal text-[#878787]">Отделка</span>
                    <!-- Чистовая -->
                    <span class="font-medium">{{ "_" }}</span>
                </li>
                <li class="font-[Inter] text-[14px] leading-[17px] flex justify-between items-center">
                    <span class="font-normal text-[#878787]">Ипотека</span>
                    <span class="font-medium underline text-[#3478F6]">от {{ format_thousands(64335) }} ₽/мес</span>
                </li>
            </ul>
        </div>

        <div class="px-[22px] bg-[#F4FAFF] py-[10px]">
            <slot name="pre-cta"> </slot>
            <div class="px-3">
                <button :class="['block text-center py-4 font-[Raleway] rounded-[3px] border-[1.6px] text-[13px] leading-[15px] font-bold cursor-pointer border-[#FCBD00] text-[#131313] w-full hover:bg-[#FCBD00] hover:text-white transition-all duration-300']">Расчитать ипотеку</button>
            </div>
        </div>
    </article>
</template>
