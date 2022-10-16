<script setup lang="ts">
import Building from "~/components/Partials/Building.vue";
import BuildingImg from "~/assets/img/catalog-promotion-building.png";

const current = shallowRef(0);

const options = ["Отзывы", "Вопрос - ответ"];
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
            <template #head>
                <x-scroll-header :choices="options" v-model="current" class="mb-[26px]" />
            </template>

            <Card class="bg-white rounded-[5px] px-[23px] pt-[26px] pb-[30px] mb-[22px]">
                <template #header>
                    <div>
                        <p class="font-bold text-[14px] leading-3 font-[Raleway]">Валентин</p>
                        <p class="font-normal text-[12px] leading-6 text-[#878787]">22 августа 2020</p>
                    </div>

                    <stars-rating class="my-[20px]" :rating="2" />
                </template>

                <p class="font-normal text-[13px] leading-6 font-[Inter] text-[#878787] mb-3">Отличный район, мне кажется, все близко, метро относительно недалеко. Есть поблизости несколько парковок, даже если своей не хватит, вполне можно найти где поставить машину.</p>

                <template #footer>
                    <div class="flex items-center justify-between">
                        <p class="font[Raleway] text-[13px] font-bold leading-3 text-[#E71F61]">Ответить</p>
                        <p class="flex items-center gap-4">
                            <span class="text-xs font-normal font-[Inter] leading-6 text-[#878787]">Полезный отзыв?</span>
                            <Votes :up="10" :down="0" class="inline" />
                        </p>
                    </div>
                </template>
            </Card>

            <template #foot>
                <div class="text-center">
                    <Button label="Все отзывы" class="bg-[#E71F61]" />
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped></style>
