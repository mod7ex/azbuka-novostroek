<script setup lang="ts">
import SVGDocs from "~/assets/svg/adv-docs.svg";
import SVGTime from "~/assets/svg/adv-time.svg";
import SVGChoice from "~/assets/svg/adv-choice.svg";
import SVGDecision from "~/assets/svg/adv-decision.svg";

const advantages = [
    {
        icon: SVGDocs,
        title: "Тщательная работа<br /> с документами",
        body: "Стоит заметить, что в таких агентствах документ составляются не только по всем требованиям законодательства, но самое главное – честно.",
    },
    {
        icon: SVGTime,
        title: "Экономия<br />времени",
        body: "Стоит заметить, что в таких агентствах документ составляются не только по всем требованиям законодательства, но самое главное – честно.",
    },
    {
        icon: SVGDecision,
        title: "Грамотное<br />решение",
        body: "Стоит заметить, что в таких агентствах документ составляются не только по всем требованиям законодательства, но самое главное – честно.",
    },
    {
        icon: SVGChoice,
        title: "Большой<br />выбор",
        body: "Стоит заметить, что в таких агентствах документ составляются не только по всем требованиям законодательства, но самое главное – честно.",
    },
];
</script>

<template>
    <NuxtLayout name="app-section" class="advantages-section" body_class="md:flex md:justify-center md:items-stretch">
        <template #head>
            <h1 class="text-left text-2xl font-bold mb-3">Наши преимущества</h1>
        </template>

        <Card v-for="(adv, i) in advantages" :key="i" class="p-6 md:w-3/12 md:shadow-none md:m-2 md:pl-0 md:pr-12">
            <template #header>
                <div class="flex items-center justify-start md:block">
                    <app-img :src="adv.icon" class="svg mr-6 h-14 w-12" />
                    <h1 :class="['text-sm font-bold md:mt-6', $style.head]" v-html="adv.title"></h1>
                </div>
            </template>

            <div class="border border-dashed md:border-none my-4 md:my-3 border-blue-700 border-opacity-5"></div>

            <p class="text-gray-600 text-sm">
                {{ adv.body }}
            </p>
        </Card>
    </NuxtLayout>
</template>

<style module lang="scss">
.head {
    width: 17ch;
}
</style>
