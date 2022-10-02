<script setup lang="ts">
import SVGDocs from "~/assets/svg/adv-docs.svg";
import SVGTime from "~/assets/svg/adv-time.svg";
import SVGChoice from "~/assets/svg/adv-choice.svg";
import SVGDecision from "~/assets/svg/adv-decision.svg";

const advantages = [
    {
        icon: SVGDocs,
        title: "Тщательная работа с документами",
        body: "Стоит заметить, что в таких агентствах документ составляются не только по всем требованиям законодательства, но самое главное – честно.",
    },
    {
        icon: SVGTime,
        title: "Экономия времени",
        body: "Стоит заметить, что в таких агентствах документ составляются не только по всем требованиям законодательства, но самое главное – честно.",
    },
    {
        icon: SVGDecision,
        title: "Грамотное решение",
        body: "Стоит заметить, что в таких агентствах документ составляются не только по всем требованиям законодательства, но самое главное – честно.",
    },
    {
        icon: SVGChoice,
        title: "Большой выбор",
        body: "Стоит заметить, что в таких агентствах документ составляются не только по всем требованиям законодательства, но самое главное – честно.",
    },
];
</script>

<template>
    <NuxtLayout name="app-section" :class="[$style['advantages-section'], 'mb-[54px] md:mb-[84px]']">
        <template #head>
            <h1 class="text-left text-[26px] md:text-[38px] leading-9 md:leading-[44px] font-bold md:font-extrabold text-[#131313] font-[Raleway] mb-[30px] md:mb-[58px]">Наши преимущества</h1>
        </template>

        <div :class="$style.advantages">
            <Card v-for="(adv, i) in advantages" :key="i" :class="['p-[23px] md:p-0 rounded-[5px] mb-[10px]', $style.card]">
                <template #header>
                    <div class="flex items-center justify-start md:block md:mb-[17px]">
                        <app-img :src="adv.icon" class="svg mr-[22px] md:mb-[37px] h-[50px] w-[52px] md:h-[68px] md:w-[73px]" />
                        <h1 :class="['text-[13px] md:text-[14px] font-extrabold leading-5 font-[Raleway]', $style.head]" v-html="adv.title"></h1>
                    </div>
                </template>

                <div class="border border-dashed md:border-none my-3 md:hidden border-[#3478F6] border-opacity-5"></div>

                <p class="text-[13px] md:text-[14px] leading-6 font-normal text-[#828282] whitespace-normal">
                    {{ adv.body }}
                </p>
            </Card>
        </div>
    </NuxtLayout>
</template>

<style module lang="scss">
.advantages-section {
    .advantages {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));

        @include break_point(700px) {
            column-gap: 10px;
        }

        @include break_point(1277px) {
            column-gap: 75px;
        }
    }
}

.head {
    width: 18ch;

    @include break_point(768px) {
        width: 19ch;
    }
}

.card {
    box-shadow: $box-shadow;
    width: 100%;
    padding: 23px;

    grid-column: span 4 / span 4;

    @include break_point(700px) {
        grid-column: span 2 / span 2;
    }

    @include break_point(1277px) {
        grid-column: span 1 / span 1;
        box-shadow: none;
        padding: 0;
    }
}
</style>
