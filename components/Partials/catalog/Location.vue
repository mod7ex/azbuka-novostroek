<script setup lang="ts">
// import { uuidGen } from "~/utils";
import MapMarker from "~/components/MapMarker.vue";

defineProps<{ complex?: any }>();

/* const uuid = uuidGen("location");

const locationDetails = [
    { label: "Расположение", key: uuid() },
    { label: "Детские сады", key: uuid() },
    { label: "Школы", key: uuid() },
    { label: "Торговые центры", key: uuid() },
    { label: "Новостройки", key: uuid() },
    { label: "Медицина", key: uuid() },
    { label: "ВУЗы", key: uuid() },
    { label: "Метро", key: uuid() },
    { label: "Спорт", key: uuid() },
    { label: "Торговые центры", key: uuid() },
]; */
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pt-[40px] md:pb-[59px]']">
            <template #head>
                <h1 class="text-[24px] font-black leading-[28px] font-[Raleway] text-[#131313]">Расположение</h1>
            </template>

            <div class="my-4 md:mt-[34px] md:mb-[28px] h-[513px] md:h-[296px] w-full">
                <map-marker :coordinates="complex?.coordinates" :label="complex?.name" />
            </div>

            <!--
            <template #foot>
                <div class="grid grid-cols-2 md:grid-cols-4 mb-8 md:pb-[59px] gap-y-[18px]">
                    <label v-for="item in locationDetails" :key="item.key" :for="item.key" class="pl-2 col-span-1 flex">
                        <input :id="item.key" type="checkbox" />
                        <span class="ml-[22px] font-[Inter] text-[14px] leading-5 font-normal">{{ item.label }}</span>
                    </label>
                </div>

                <dashed-devider class="md:hidden" />
            </template>
            -->
        </NuxtLayout>
    </div>
</template>

<!-- 
<style lang="scss" scoped>
label {
    max-width: fit-content;

    input {
        border-radius: 3px;
        position: relative;
        @include flex;
        appearance: none;

        &::after {
            content: " ";
            position: absolute;
            background-color: #f4f4f4;
            border-radius: 3px;
            width: 16px;
            height: 16px;
        }

        &:checked {
            &::after {
                background-color: #1da958;

                border-radius: 1px;
                width: 10px;
                height: 10px;
            }

            &::before {
                content: " ";
                margin: auto;
                background-color: transparent;
                border: 1px solid #1da958;
                position: absolute;

                border-radius: 3px;
                width: 16px;
                height: 16px;
            }

            & + span {
                color: #1da958;
            }
        }
    }
}
</style>
 -->
