<script setup lang="ts">
const { scroll, targetRef } = useScroll();
</script>

<template>
    <NuxtLayout name="app-section" class="mb-[34px] md:mb-[85px] md:mt-[75px] px-0 md:px-[60px] relative">
        <div ref="targetRef" class="reviews-section p-2 md:p-0 overflow-x-scroll no-scroll-thum">
            <div class="scroll-area flex gap-2">
                <div class="review" style="overflow: hidden; position: relative">
                    <iframe style="width: 100%; height: 100%; border: 1px solid #e6e6e6; border-radius: 8px; box-sizing: border-box" src="https://yandex.ru/maps-reviews-widget/230712779147?comments"></iframe
                    ><a
                        href="https://yandex.ru/maps/org/azbuka_novostroyek/230712779147/"
                        target="_blank"
                        style="
                            box-sizing: border-box;
                            text-decoration: none;
                            color: #b3b3b3;
                            font-size: 10px;
                            font-family: YS Text, sans-serif;
                            padding: 0 20px;
                            position: absolute;
                            bottom: 8px;
                            width: 100%;
                            text-align: center;
                            left: 0;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: block;
                            max-height: 14px;
                            white-space: nowrap;
                            padding: 0 16px;
                            box-sizing: border-box;
                        "
                        >Азбука Новостроек на карте Ростова‑на‑Дону — Яндекс Карты</a
                    >
                </div>
                <div class="review" style="overflow: hidden; position: relative">
                    <iframe style="width: 100%; height: 100%; border: 1px solid #e6e6e6; border-radius: 8px; box-sizing: border-box" src="https://yandex.ru/maps-reviews-widget/64313580381?comments"></iframe
                    ><a
                        href="https://yandex.ru/maps/org/azbuka_novostroyek/64313580381/"
                        target="_blank"
                        style="
                            box-sizing: border-box;
                            text-decoration: none;
                            color: #b3b3b3;
                            font-size: 10px;
                            font-family: YS Text, sans-serif;
                            padding: 0 20px;
                            position: absolute;
                            bottom: 8px;
                            width: 100%;
                            text-align: center;
                            left: 0;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: block;
                            max-height: 14px;
                            white-space: nowrap;
                            padding: 0 16px;
                            box-sizing: border-box;
                        "
                        >Азбука Новостроек на карте Ростова‑на‑Дону — Яндекс Карты</a
                    >
                </div>
                <div class="review" style="overflow: hidden; position: relative">
                    <iframe style="width: 100%; height: 100%; border: 1px solid #e6e6e6; border-radius: 8px; box-sizing: border-box" src="https://yandex.ru/maps-reviews-widget/51526377985?comments"></iframe
                    ><a
                        href="https://yandex.ru/maps/org/azbuka_novostroyek/51526377985/"
                        target="_blank"
                        style="
                            box-sizing: border-box;
                            text-decoration: none;
                            color: #b3b3b3;
                            font-size: 10px;
                            font-family: YS Text, sans-serif;
                            padding: 0 20px;
                            position: absolute;
                            bottom: 8px;
                            width: 100%;
                            text-align: center;
                            left: 0;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: block;
                            max-height: 14px;
                            white-space: nowrap;
                            padding: 0 16px;
                            box-sizing: border-box;
                        "
                        >Азбука Новостроек на карте Краснодара — Яндекс Карты</a
                    >
                </div>
                <div class="review" style="overflow: hidden; position: relative">
                    <iframe style="width: 100%; height: 100%; border: 1px solid #e6e6e6; border-radius: 8px; box-sizing: border-box" src="https://yandex.ru/maps-reviews-widget/68136979239?comments"></iframe>
                    <a
                        href="https://yandex.ru/maps/org/azbuka_novostroyek/68136979239/"
                        target="_blank"
                        style="
                            box-sizing: border-box;
                            text-decoration: none;
                            color: #b3b3b3;
                            font-size: 10px;
                            font-family: YS Text, sans-serif;
                            padding: 0 20px;
                            position: absolute;
                            bottom: 8px;
                            width: 100%;
                            text-align: center;
                            left: 0;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: block;
                            max-height: 14px;
                            white-space: nowrap;
                            padding: 0 16px;
                            box-sizing: border-box;
                        "
                        >Азбука новостроек на карте Краснодара — Яндекс Карты</a
                    >
                </div>
            </div>
        </div>

        <scroll-button class="shadow-lg top-0 bottom-0 my-auto absolute right-[32px]" :on-scroll="() => scroll({ left: 300 })" />
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.reviews-section {
    .scroll-area {
        width: fit-content;
    }

    .review {
        height: 800px !important;
        width: 359px !important;

        @media (min-width: 768px) {
            width: 760px !important;
        }
    }

    @include shadow($x: 20px, $y: 0, $blur: 3px, $spread: -20px, $color: rgba(0, 0, 0, 0.5));
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
</style>
