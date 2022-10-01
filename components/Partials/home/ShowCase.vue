<script setup lang="ts">
import SVGGroup from "~/assets/svg/group.svg";
</script>

<template>
    <section tag="section" :class="['showcase-section md:px-[60px] md:flex md:items-end md:justify-center pb-4 md:pb-0']">
        <div class="text mb-7">
            <div class="mb-6 md:mb-[45px] text-center md:text-left">
                <h1 class="text-[32px] md:text-5xl font-extrabold leading-[42px] md:leading-[56px] text-[#131313] mb-[6px] md:mb-[25px]">
                    <p>База новостроек</p>
                    <p class="hidden md:block whitespace-nowrap">от застройщиков</p>
                </h1>
                <h4 class="text-base md:text-2xl md:leading-[29px] leading-6 font-normal text-[#8C8C8C]">Ростова-на-Дону и Ростовской области</h4>
            </div>
            <Button label="Подробнее" class="mx-auto block md:inline bg-[#E71F61]" />
        </div>

        <div class="divider"></div>

        <div class="svg-container relative h-[248px] md:h-[359px]">
            <svg class="h-full ml-[26px]" viewBox="0 0 335 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M37.9866 241.253C6.82935 205.454 -6.44829 155.021 2.98185 108.641C5.77318 94.9071 11.0541 80.7228 22.2193 72.1672C33.9127 63.2363 49.7554 62.0355 64.4664 62.711C79.1774 63.3114 94.2657 65.3377 108.449 61.4351C129.572 55.5813 144.736 38.0198 160.88 23.3102C177.025 8.67556 198.827 -4.38299 219.724 1.84609C235.341 6.49914 246.204 21.0587 251.862 36.3687C257.52 51.6037 259.029 68.0394 262.877 83.7998C266.724 99.6351 273.438 115.621 286.565 125.377C293.053 130.18 300.748 133.107 307.538 137.46C324.437 148.267 335.149 168.005 334.998 187.968C334.848 207.931 323.833 227.519 306.708 238.026"
                    fill="white"
                    fill-opacity="0.5"
                />
            </svg>
            <app-img class="absolute mx-auto" :src="SVGGroup" alt="" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.showcase-section {
    .text {
        & h1 {
            text-align: center;
        }
        text-align: center;
    }
    .divider {
        display: none;
    }

    flex-wrap: wrap;
    justify-items: stretch;

    @include break_point(965px) {
        flex-wrap: nowrap;

        .divider {
            display: block;
        }

        .text {
            & h1 {
                text-align: left;
            }
            text-align: left;
        }
    }

    .divider {
        max-width: 128px;
        width: 100%;
    }

    .svg-container {
        @include flex();
        img {
            left: 0;
            right: 0;
            text-align: center;

            width: 222px;
        }

        @include break_point(761px) {
            img {
                top: -2rem;
                left: -2rem;
                height: 160%;
                width: 100%;
            }
        }
    }
}
</style>
