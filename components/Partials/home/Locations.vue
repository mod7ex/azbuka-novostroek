<script setup lang="ts">
import Buildings from "~/assets/svg/buildings.svg";
import Couple from "~/assets/svg/couple.svg";
</script>

<template>
    <NuxtLayout name="app-section" class="locations-section p-6 shadow-lg rounded-md md:p-0 lg:w-10/12 md:mx-auto" body_class="md:flex md:flex-row-reverse md:items-stretch md:justify-center">
        <div class="questions-score md:w-1/2 md:px-16 md:p-9">
            <div>
                <h1 class="text-2xl font-bold mb-6">Где присматриваете квартиру?</h1>

                <ul>
                    <li class="mb-2 text-sm flex items-center">
                        <span class="relative h-5 w-5 border-2 mr-2 rounded-full flex items-center justify-center" :class="['border-green-600']">
                            <app-i name="ic:round-circle" class="h-3 absolute" :class="['text-green-600']" />
                        </span>
                        <p>В Ростове-на-Дону</p>
                    </li>
                    <li class="mb-2 text-sm flex items-center">
                        <span class="relative h-5 w-5 border-2 mr-2 rounded-full flex items-center justify-center">
                            <app-i name="ic:round-circle" class="h-3 absolute" :class="['text-gray-200']" />
                        </span>
                        <p>В Ростовской области</p>
                    </li>
                    <li class="mb-2 text-sm flex items-center">
                        <span class="relative h-5 w-5 border-2 mr-2 rounded-full flex items-center justify-center">
                            <app-i name="ic:round-circle" class="h-3 absolute" :class="['text-gray-200']" />
                        </span>
                        <p>В Центре</p>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col mb-9">
                <small class="mb-2 inline-block text-right text-gray-500 italic">1 вопрос из 5</small>
                <div class="py-px bg-gray-300 relative flex items-center">
                    <span class="steps absolute rounded bg-green-600 left-0 w-1/5"></span>
                </div>
            </div>

            <div class="mb-16 md:mb-0 flex justify-between items-center">
                <Button label="Далее" color="yellow" :strength="400" class="px-9" />

                <span class="hidden md:flex items-end">
                    <p class="text-2xl">1</p>
                    <p class="text-xs text-gray-500 mx-1">/</p>
                    <p class="text-xs text-gray-500">5</p>
                </span>
            </div>
        </div>

        <div class="images overflow-hidden flex items-end justify-start md:w-1/2 md:p-9">
            <app-img :src="Couple" />
            <app-img :src="Buildings" />
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.locations-section {
    background-image: url("~/assets/svg/cloud.svg");
    background-repeat: no-repeat;
    background-position: 100% bottom;
    background-size: 80% 55%;

    @include break_point(400px) {
        background-size: 90% 62%;
    }

    @include break_point(768px) {
        background-image: none;

        .images {
            background-image: url("~/assets/svg/cloud.svg");
            // background-image: url("~/assets/img/Group.png");
            background-repeat: no-repeat;

            background-position: left bottom;
            background-size: 100% 100%;

            position: relative;

            & img:last-of-type {
                width: 354px;
                position: absolute;
                top: 20px;
                right: 20px;
            }

            & img:first-of-type {
                width: 100px;
                position: absolute;
                bottom: 0;
                left: 20px;
            }
        }
    }
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
