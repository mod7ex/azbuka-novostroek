<script setup lang="ts">
import Buildings from "~/assets/svg/buildings.svg";
import Couple from "~/assets/svg/couple.svg";
</script>

<template>
    <NuxtLayout name="app-section" class="locations-section overflow-hidden rounded-[5px] md:p-0 lg:w-9/12 md:mx-auto mb-[42px]" body_class="md:flex md:flex-row-reverse md:items-stretch md:justify-center">
        <div class="questions-score md:w-1/2 md:px-16 md:p-9 px-[23px] pt-[26px]">
            <div>
                <h1 class="text-left text-[26px] md:text-[32px] leading-9 md:leading-[37px] font-bold md:font-extrabold text-[#131313] font-[Raleway] mb-5 md:mb-[43px]">Где присматриваете квартиру?</h1>

                <ul>
                    <li class="flex items-center mb-4">
                        <span class="relative mr-[15px] h-6 w-6 border-2 rounded-full flex items-center justify-center border-[#1DA958]">
                            <app-i name="ic:round-circle" class="absolute text-[#1DA958] h-[10px] w-[10px]" />
                        </span>
                        <p class="text-sm font-normal leading-5 font-[Inter]">В Ростове-на-Дону</p>
                    </li>

                    <li class="flex items-center mb-4">
                        <span class="relative mr-[15px] h-6 w-6 bg-[#fafcfe] border-2 border-[#e8e8e8] rounded-full flex items-center justify-center">
                            <app-i name="ic:round-circle" class="absolute h-[10px] w-[10px] text-[#e8e8e8]" />
                        </span>
                        <p class="text-sm font-normal leading-5 font-[Inter]">В Ростовской области</p>
                    </li>

                    <li class="flex items-center mb-[2px] md:mb-[6px]">
                        <span class="relative mr-[15px] h-6 w-6 bg-[#fafcfe] border-2 border-[#e8e8e8] rounded-full flex items-center justify-center">
                            <app-i name="ic:round-circle" class="absolute h-[10px] w-[10px] text-[#e8e8e8]" />
                        </span>
                        <p class="text-sm font-normal leading-5 font-[Inter]">В Центре</p>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col mb-[22px] md:mb-[45px]">
                <small class="mb-[7px] md:mb-4 inline-block text-right text-[#8C8C8C] leading-[17px] md:leading-5 text-xs md:text-sm font-light font-[Inter] italic"> 1 вопрос из 5 </small>

                <div class="relative border border-[#00000014] flex items-center">
                    <span class="steps absolute rounded bg-[#1DA958] h-1 left-0 w-1/5"></span>
                </div>
            </div>

            <div class="md:mb-0 flex justify-between items-center">
                <Button label="Далее" class="px-9 bg-[#FCBD00]" />

                <span class="hidden md:flex items-end">
                    <p class="text-[28px] font-medium leading-[42px] text-[#131313]">1</p>
                    <p class="text-[18px] font-medium leading-[42px] text-[#BDBDBD] mx-1">/</p>
                    <p class="text-[18px] font-medium leading-[42px] text-[#BDBDBD]">5</p>
                </span>
            </div>
        </div>

        <div class="images flex items-end justify-start md:w-1/2 md:p-9 pb-[15px]">
            <!-- <app-img :src="Couple" /> -->
            <!-- <app-img :src="Buildings" /> -->
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.locations-section {
    background-image: url("~/assets/img/cloud.png");
    background-repeat: no-repeat;
    background-position: 100% bottom;
    background-size: 91% 50%;

    box-shadow: $box-shadow;

    .images {
        overflow: hidden;
        z-index: 1;
        border: 2px solid pink;

        @include flex($align-items: end, $justify-content: start, $gap: 10px);

        &::before {
            content: " ";
            width: 74.5px;
            height: 131px;
            background-image: url("~/assets/svg/couple.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            margin-left: 15px;
            border: 2px solid green;
        }

        &::after {
            content: " ";
            height: 173px;
            width: 241px;
            background-image: url("~/assets/svg/buildings.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            margin-top: 55px;
            margin-right: -200px !important;
            border: 2px solid red;
        }

        @include break_point(400px) {
            @include flex($flex-wrap: nowrap, $align-items: end, $justify-content: center, $gap: 10px);

            &::before {
                width: 91px;
                height: 160px;
            }

            &::after {
                height: 218px;
                width: 287px;
                margin-top: 55px;
                margin-right: 0 !important;
            }
        }
    }

    @include break_point(768px) {
        background-image: none;

        background-color: yellow;
        position: relative;

        $var: calc((100vw - 1160px) / (1441 - 1160));

        &::before {
            content: " ";
            position: absolute;
            background-image: url("~/assets/svg/cloud.svg");
            background-repeat: no-repeat;
            background-position: left bottom;
            background-size: 100% 100%;
            background-color: blue;
            width: calc(400px - (400 - 600) * (100vw - 1000px) / (1441 - 1000));
            // width: 50%;
            height: 95%;
            // left: calc(-80 * $var);
            left: -80px;
            // top: calc(20 * $var);
            bottom: 0;
        }

        .images {
            border: 2px solid green;
            position: relative;

            &::before {
                content: " ";
                position: absolute;
                width: 100px;
                height: 176px;
                left: 0;
                bottom: 35px;
                border: 2px solid green;
            }

            &::after {
                content: " ";
                position: absolute;
                height: 235px;
                width: 354px;
                top: 0;
                left: 65px;
                border: 2px solid green;
            }
        }
    }
}
</style>
