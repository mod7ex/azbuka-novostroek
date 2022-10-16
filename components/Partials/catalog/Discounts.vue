<script setup lang="ts">
import Building from "~/components/Partials/Building.vue";
import BuildingImg from "~/assets/img/catalog-promotion-building.png";
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
            <template #head>
                <h1 class="text-[20px] font-bold leading-[30px] font-[Inter] text-[#131313]">Скидки и акции на новостройки Ростова-на-Дону</h1>
            </template>

            <div class="buildings grid grid-cols-12 gap-3 md:gap-[30px] mb-[28px] md:mb-[61px] mt-5">
                <!-- 26 + 2 = 28 -->
                <Building v-for="i in 4" :key="i" :img="BuildingImg" :actions="false">
                    <template #description-up>
                        <p class="flex items-center justify-center gap-[5px]">
                            <app-i class="text-[#1DA958] w-3 h-3" name="heroicons-outline:location-marker" />
                            <span>Западный</span>
                        </p>
                    </template>

                    <template #description-middle> ЖК «Зорге 9» </template>

                    <template #price> от 9 млн ₽ </template>
                </Building>
            </div>

            <template #foot> <Button label="Посмотреть все предложения" class="bg-[#FCBD00] w-full" /> </template>
        </NuxtLayout>
    </div>
</template>
