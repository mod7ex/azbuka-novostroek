<script setup lang="ts">
import { SECTIONS } from "~/constants";

const props = defineProps<{ complex?: any }>();

const isAllBuilt = (payload) => payload?.count_homes?.total === payload?.count_homes?.finished;

const onlyFewBuilt = (payload) => payload?.count_homes?.finished > 0 && payload?.count_homes?.finished < payload?.count_homes?.total;

const current = useCurrentChoicesOption();
</script>

<template>
    <article :class="['bg-[#3478F6] rounded-[5px] card-container', $attrs.class]">
        <div class="rounded-t-[5px] md:rounded-t-none p-[21px] md:py-[40px] md:px-[30px] flex flex-col justify-between card-photo md:flex-grow" :style="{ backgroundImage: `url(${complex?.image?.url})` }">
            <div class="flex items-center justify-start gap-[6px] md:gap-[10px] md:items-end md:flex-col">
                <a href="tel:88633332727" class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#E71F61] rounded-full cursor-pointer">
                    <app-i class="absolute text-white w-3 h-3 md:w-5 md:h-5" name="ic:round-local-phone" />
                </a>
                <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#1DA958] rounded-full cursor-pointer">
                    <app-i class="absolute text-white w-3 h-3 md:w-5 md:h-5" name="zondicons:share-alt" />
                </button>
            </div>

            <div class="flex items-center justify-between md:flex-row-reverse">
                <a class="bg-[#FCBD00] text-white py-[7px] px-3 rounded-[60px] md:rounded-[3px] md:py-5 md:px-[30px] text-xs md:text-[15px] leading-[13px] md:leading-[17px] font-bold font-[Raleway]" :href="`#${SECTIONS.STOCK}`">Узнать об акциях</a>
                <!-- <button >Узнать об акциях</button> -->
                <ul class="flex items-center justify-center gap-[6px] md:gap-[10px]">
                    <ul class="flex items-center justify-center gap-[6px] md:gap-[10px] md:flex-row-reverse">
                        <ol>
                            <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                                <app-i class="absolute text-[#3478F6] w-3 h-3 md:w-5 md:h-5" name="heroicons-outline:star" />
                            </button>
                        </ol>
                        <ol>
                            <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                                <bars-svg class="w-4 h-4" />
                            </button>
                        </ol>
                    </ul>
                    <ol>
                        <a :href="`#${SECTIONS.DESCRIPTION}`" class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                            <app-i class="absolute text-[#3478F6] w-5 h-5" name="heroicons-outline:photograph" />
                        </a>
                    </ol>
                </ul>
            </div>
        </div>

        <div class="text-white p-[29px] pt-5 font-[Inter] md:pt-[41px] md:pl-[45px] md:pb-[35px] md:pr-[87px]">
            <h1 class="mb-[2px] md:mb-[7px] text-xl font-bold leading-[30px] md:text-[22px] md:leading-[26px]">{{ complex?.name }}</h1>
            <p class="flex items-center mb-[22px]">
                <app-i class="w-5 h-4 mr-[13px]" name="zondicons:location" />
                <span class="text-base leading-6 font-normal md:leading-[19px]">{{ complex?.city?.name }} {{ complex?.address }}</span>
            </p>

            <ul class="text-[15px] md:text-base md:leading-[19px] font-medium leading-[18px]">
                <li class="mb-[17px]"><a :href="`#${SECTIONS.DESCRIPTION}`">Описание</a></li>
                <li class="mb-[17px]"><a :href="`#${SECTIONS.CHARACTERISTICS_AND_APARTMENTS}`">Характеристики</a></li>
                <li class="mb-[17px]">
                    <a :href="`#${SECTIONS.CHARACTERISTICS_AND_APARTMENTS}`">Квартиры</a>
                    <b class="md:bg-[#1DA958] md:rounded-[2px] md:px-[6px] md:py-[3px] md:ml-[10px]"> <span class="md:hidden">(</span>{{ complex?.count_apartments }}<span class="md:hidden">)</span></b>
                </li>
                <li class="mb-[17px] flex items-center">
                    <a :href="`#${SECTIONS.CHARACTERISTICS_AND_APARTMENTS}`" @click="() => (current = 2)">Ход строительства</a>
                    <b class="md:bg-[#1DA958] md:rounded-[2px] md:px-[6px] md:py-[3px] md:ml-[10px] flex">
                        <span class="md:hidden">(</span>
                        <span class="flex gap-1">
                            <p v-if="isAllBuilt(complex)">{{ "Сдан" }}</p>
                            <p v-else>{{ "Строится" }}</p>
                            <p v-if="onlyFewBuilt(complex)">({{ "Есть сданные" }})</p>
                        </span>
                        <span class="md:hidden">)</span>
                    </b>
                </li>
                <li class="mb-[17px]"><a :href="`#${SECTIONS.MORTGAGE}`">Ипотека</a></li>
                <li class="mb-[17px]"><a :href="`#${SECTIONS.STOCK}`">Акции</a></li>
                <li class="mb-[17px]">
                    <a :href="`#${SECTIONS.REVIEWS_QR}`">Отзывы</a>
                    <b class="md:bg-[#1DA958] md:rounded-[2px] md:px-[6px] md:py-[3px] md:ml-[10px]"> <span class="md:hidden">(</span>_<span class="md:hidden">)</span></b>
                </li>
                <li class="mb-[17px]">
                    <a :href="`#${SECTIONS.REVIEWS_QR}`">Вопрос-ответ</a>
                    <b class="md:bg-[#1DA958] md:rounded-[2px] md:px-[6px] md:py-[3px] md:ml-[10px]"> <span class="md:hidden">(</span>_<span class="md:hidden">)</span></b>
                </li>
            </ul>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.card-container {
    .card-photo {
        height: 70vw;

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @include break_point(768px) {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    @include break_point(965px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: stretch;
        justify-content: space-between;

        .card-photo {
            height: auto;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
}
</style>
