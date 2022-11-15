<script setup lang="ts">
import Building from "~/components/Partials/Building.vue";
import BuildingImg from "~/assets/img/catalog-promotion-building.png";

const isMatch = useMediaQuery("(min-width: 768px)");
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pt-[42px] md:pb-[68px]']">
            <template #head>
                <h1 class="text-xl md:text-2xl font-bold md:font-extrabold leading-[30px] font-[Inter] text-[#131313]">Скидки и акции на новостройки Ростова-на-Дону</h1>
            </template>

            <div class="buildings grid grid-cols-12 gap-3 md:gap-[25px] mb-[28px] md:mb-[40px] mt-10">
                <!-- 26 + 2 = 28 -->
                <client-only>
                    <Building v-for="i in isMatch ? 3 : 4" :key="i" :img="BuildingImg" :actions="false" white-cta class="col-span-4-md-force">
                        <template #description-up>
                            <p class="flex items-center justify-center gap-[5px] md:hidden">
                                <app-i class="text-[#1DA958] w-3 h-3" name="heroicons-outline:location-marker" />
                                <span>Западный</span>
                            </p>
                        </template>

                        <template #location>
                            <span>Западный</span>
                        </template>

                        <template #description-middle>
                            <span class="inline md:hidden">ЖК «Зорге 9»</span>
                            <span class="hidden md:inline">Жилой комплекс «Зорге 9»</span>
                        </template>

                        <template #price> от 9 млн ₽ </template>

                        <template #body>
                            <p class="font-medium text-[14px] leading-4 mb-[5px]">7 мин от центра</p>
                            <p class="font-medium text-[14px] leading-4 mb-[5px]">Престижный район</p>
                            <p class="font-medium text-[14px] leading-4">Бизнес - класс на Ходынке</p>
                        </template>

                        <template #foot-ad>
                            <span class="text-[14px] font-normal leading-4">Апартаменты</span>
                            <span class="text-[14px] font-bold leading-4">от 9 млн ₽</span>
                        </template>
                    </Building>
                </client-only>
            </div>

            <template #foot>
                <Button label="Посмотреть все предложения" class="bg-[#FCBD00] w-full md:w-fit font-bold text-[15px] leading-[17px] px-[30px] py-5" />
            </template>
        </NuxtLayout>
    </div>
</template>
