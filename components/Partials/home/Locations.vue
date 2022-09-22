<script setup lang="ts">
import Buildings from "~/assets/svg/buildings.svg";
import Couple from "~/assets/svg/couple.svg";
</script>

<template>
    <NuxtLayout name="app-section" class="locations-section p-6 shadow-lg rounded-md">
        <div>
            <h1 class="text-2xl font-bold mb-3">Где присматриваете квартиру?</h1>

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

        <div class="flex flex-col mb-6">
            <small class="mb-2 inline-block text-right text-gray-500">1 вопрос из 5</small>
            <div class="py-px bg-gray-300 relative flex items-center">
                <span class="steps absolute rounded bg-green-600 left-0 w-1/5"></span>
            </div>
        </div>

        <Button label="Далее" color="yellow" :strength="400" class="px-9 mb-16" />

        <div class="images overflow-hidden flex items-end justify-start">
            <app-img :src="Couple" />
            <app-img :src="Buildings" />
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.locations-section {
    // background-color: green;
    background-image: url("~/assets/svg/cloud.svg");
    background-repeat: no-repeat;
    background-position: 100% bottom;
    background-size: 80% 55%;
    @include break_point(400px) {
        background-size: 90% 62%;
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
