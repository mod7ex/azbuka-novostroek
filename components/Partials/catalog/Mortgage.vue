<script setup lang="ts">
// import VTB from "~/assets/svg/vtb-bank.svg";
// import SBER from "~/assets/svg/sber-bank.svg";
// import RAIFFEISEN from "~/assets/svg/raiffeisen-bank.svg";
import LoanOffer from "~/components/Partials/catalog/LoanOffer.vue";

const props = defineProps<{ complex?: any; id: string }>();

const banks = computed(() => props.complex?.banks ?? []);

// const banks = [VTB, SBER, RAIFFEISEN];

const current = shallowRef(0);

const options = ["Все программы", "Оптимальные условия"];

const selection = Array.from(Array(10).keys()).map((value) => ({ value, label: `Selection ${value}` }));

const isMatch = useMediaQuery("(min-width: 768px)");

const foo = ref();
</script>

<template>
    <div :id="id">
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pb-[33px] md:pt-[90px]']">
            <template #head>
                <div class="md:flex md:justify-between md:items-center md:mb-12">
                    <h1 class="mb-[19px] md:mb-0 text-[26px] md:text-[24px] font-bold md:font-extrabold leading-9 md:leading-[28px] font-[Raleway] text-[#131313]">Ипотека</h1>

                    <client-only>
                        <x-scroll-header :choices="options" v-model="current" :dotted-border="!isMatch" :padding="false" class="mb-[21px] md:mb-0" />
                    </client-only>
                </div>
            </template>

            <!-- form -->
            <div class="md:grid grid-cols-3 md:gap-y-[29px] md:gap-x-4">
                <app-select class="form-section mb-[23px] md:col-span-1 md:mb-0" :options="[]" label="Новостройка" disabled :inner-label="complex?.name" bg />

                <div class="form-section mb-[23px] flex gap-[9px] md:gap-4 md:col-span-2 md:mb-0">
                    <app-select class="flex-grow" :options="selection" label="Срок сдачи" bg />
                    <app-select class="flex-grow" :options="selection" label="Комнатность" bg />
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-0">
                    <!-- foo: {{ foo }} -->
                    <labled-range-input label="Стоимость недвижимости" v-model="foo" max-label="₽" bg uni />
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-0">
                    <labled-range-input label="Первый взнос" max-label="₽" bg uni />
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-[41px]">
                    <!-- 29 + 41 = 70 -->
                    <labled-range-input label="Срок кредита" max-label="₽" bg uni />
                </div>

                <div class="form-section mb-[25px] md:col-span-3 md:mb-0">
                    <app-radio :options="['Стандартная ипотека', 'Субсидированная застройщиком', 'Господдержка']" class="md:flex-row md:justify-between md:mb-[60px]" />
                </div>
            </div>
            <!-- ---------------------------------------- -->

            <template #foot>
                <loan-offer :banks="banks" />
            </template>
        </NuxtLayout>
    </div>
</template>
