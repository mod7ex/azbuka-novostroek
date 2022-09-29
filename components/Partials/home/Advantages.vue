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
    <NuxtLayout name="app-section" class="advantages-section" body_class="md:flex md:justify-center md:items-stretch">
        <template #head>
            <h1 class="text-left text-[26px] leading-9 font-bold text-[#131313] font-[Raleway]">Наши преимущества</h1>
        </template>

        <Card v-for="(adv, i) in advantages" :key="i" :class="['p-[23px] rounded-[5px] mb-[10px]', $style.card]">
            <template #header>
                <div class="flex items-center justify-start md:block">
                    <app-img :src="adv.icon" class="svg mr-[22px] h-[50px] w-[52px]" />
                    <h1 :class="['text-[13px] font-extrabold leading-5 font-[Raleway]', $style.head]" v-html="adv.title"></h1>
                </div>
            </template>

            <div class="border border-dashed md:border-none my-3 border-[#3478F6] border-opacity-5"></div>

            <p class="text-[13px] leading-6 font-normal text-[#828282]">
                {{ adv.body }}
            </p>
        </Card>
    </NuxtLayout>
</template>

<style module lang="scss">
.head {
    width: 18ch;
}

.card {
    box-shadow: $box-shadow;
}
</style>
