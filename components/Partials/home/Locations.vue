<script setup lang="ts">
import Buildings from "~/assets/svg/buildings.svg";
import Couple from "~/assets/svg/couple.svg";
</script>

<template>
    <NuxtLayout name="app-section" class="locations-section border-2 border-black rounded-[5px] md:p-0 lg:w-10/12 md:mx-auto" body_class="md:flex md:flex-row-reverse md:items-stretch md:justify-center">
        <div class="questions-score md:w-1/2 md:px-16 md:p-9 border-2 border-yellow-300 px-[23px] pt-[26px]">
            <div>
                <h1 class="text-left text-[26px] leading-9 font-bold text-[#131313] font-[Raleway] mb-5">Где присматриваете квартиру?</h1>

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

                    <li class="flex items-center mb-[2px]">
                        <span class="relative mr-[15px] h-6 w-6 bg-[#fafcfe] border-2 border-[#e8e8e8] rounded-full flex items-center justify-center">
                            <app-i name="ic:round-circle" class="absolute h-[10px] w-[10px] text-[#e8e8e8]" />
                        </span>
                        <p class="text-sm font-normal leading-5 font-[Inter]">В Центре</p>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col mb-[22px]">
                <small class="mb-[7px] inline-block text-right text-[#8C8C8C] leading-[17px] text-xs font-light font-[Inter] italic">1 вопрос из 5</small>

                <div class="relative border border-[#00000014] flex items-center">
                    <span class="steps absolute rounded bg-green-600 h-1 left-0 w-1/5"></span>
                </div>
            </div>

            <div class="mb-16 md:mb-0 flex justify-between items-center">
                <Button label="Далее" class="px-9 bg-[#FCBD00]" />

                <span class="hidden md:flex items-end">
                    <p class="text-2xl">1</p>
                    <p class="text-xs text-gray-500 mx-1">/</p>
                    <p class="text-xs text-gray-500">5</p>
                </span>
            </div>
        </div>

        <div class="images overflow-hidden flex items-end justify-start md:w-1/2 md:p-9 pb-[15px]">
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
        &::before {
            content: " ";
            width: 74.5px;
            height: 131px;
            background-image: url("~/assets/svg/couple.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
            margin-left: 15px;
        }

        &::after {
            content: " ";
            height: 173px;
            width: 241px;
            background-image: url("~/assets/svg/buildings.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
        }

        // img {
        //     // position: absolute;

        //     &:first-of-type {
        //     }

        //     &:last-of-type {
        //         position: relative;

        //         margin-right: -200px;
        //     }
        // }
    }

    // stopped here

    // @include break_point(400px) {
    //     background-size: 90% 62%;
    // }

    // @include break_point(768px) {
    //     background-image: none;

    //     .images {
    //         background-image: url("~/assets/svg/cloud.svg");
    //         // background-image: url("~/assets/img/Group.png");
    //         background-repeat: no-repeat;

    //         background-position: left bottom;
    //         background-size: 100% 100%;

    //         position: relative;

    //         img {
    //             position: absolute;

    //             &:first-of-type {
    //                 width: 74.5px;
    //                 height: 131px;
    //             }

    //             &:last-of-type {
    //                 height: 173px;
    //                 width: 241px;
    //             }
    //         }
    //     }
    // }
}

span.steps {
    padding: 2px 0;
}

.images {
    img {
        &:first-of-type {
            width: 25%;
        }

        &:last-of-type {
            width: 75%;
        }
    }

    @include break_point(400px) {
        justify-content: center;
        img {
            transform: none;
        }
    }
}
</style>
