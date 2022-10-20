<script setup lang="ts">
// import Buildings from "~/assets/svg/buildings.svg";
// import Couple from "~/assets/svg/couple.svg";
</script>

<template>
    <app-width class="locations-section overflow-hidden rounded-[5px] lg:w-9/12 mb-[42px] md:mb-[180px] px-5 md:p-0 md:pr-[72px] py-2 md:py-0" :padding="false">
        <div class="md:flex md:flex-row-reverse md:items-stretch md:justify-center rounded-[5px]">
            <div class="questions-score md:w-1/2 px-[23px] md:px-0 pt-[26px] md:pt-[51px] md:pb-[42px] md:pl-[30px]">
                <div>
                    <h1 class="text-left text-[26px] md:text-[32px] leading-9 md:leading-[37px] font-bold md:font-extrabold text-[#131313] font-[Raleway] mb-5 md:mb-[43px]">Где присматриваете квартиру?</h1>

                    <app-radio :options="['В Ростове-на-Дону', 'В Ростовской области', 'В Центре']" />
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

            <div class="images md:w-1/2 pb-[15px]">
                <!-- <app-img :src="Couple" /> -->
                <!-- <app-img :src="Buildings" /> -->
            </div>
        </div>
    </app-width>
</template>

<style lang="scss">
.locations-section {
    background-repeat: no-repeat;
    background-position: 100% bottom;
    background-size: 91% 50%;

    & > div {
        background-image: url("~/assets/img/cloud.png");
        background-repeat: no-repeat;
        background-position: 100% bottom;
        background-size: 91% 50%;

        box-shadow: $box-shadow;
    }

    .images {
        overflow: hidden;

        @include flex($align-items: flex-end, $justify-content: flex-start, $gap: 10px);

        &::before {
            content: " ";
            width: 74.5px;
            height: 131px;
            background-image: url("~/assets/svg/couple.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
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
            margin-top: 55px;
            margin-right: -220px;
        }

        @include break_point(400px) {
            @include flex($flex-wrap: nowrap, $align-items: flex-end, $justify-content: center, $gap: 10px);

            &::after {
                margin-right: 0;
            }
        }
    }

    @include break_point(768px) {
        & > div {
            box-shadow: none;
            background-image: none;
        }
        box-shadow: $md-box-shadow;

        background-image: url("~/assets/img/cloud-location.png");

        background-size: 40% 96%;

        background-position: left bottom; // ++++s

        .images {
            position: relative;

            &::before {
                content: " ";
                width: 74.5px;
                height: 131px;

                height: 176px;
                width: 100px;

                margin-left: 0;
                position: absolute;
                bottom: 40px;
                left: 27px; // ++++s
            }

            &::after {
                content: " ";

                height: 234px;
                width: 354px;

                margin-top: 0;
                margin-right: 0;

                position: absolute;
                top: 53px;
                left: 73px; // ++++s
            }
        }
    }
}
</style>
