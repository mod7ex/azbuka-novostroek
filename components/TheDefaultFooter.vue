<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg";
</script>

<template>
    <footer class="lg:flex lg:items-center lg:justify-between lg:flex-wrap lg:gap-y-5 lg:gap-x-[139px] lg:py-[100px]">
        <app-width class="pt-6 lg:pt-0 lg:flex-grow">
            <div class="flex items-center justify-between lg:gap-x-[139px]">
                <app-img :src="Logo" alt="" class="w-[113px] h-[55px] lg:w-44 lg:h-20" />
                <div class="text-right text-[#131313] lg:text-left">
                    <h1 class="text-[17px] lg:text-[14px] leading-[20px] font-[Inter] font-bold mb-[2px] lg:mb-[14px] whitespace-nowrap">+7 (435) 985-22-41</h1>
                    <a href="mailto:admin@admin.com" class="font-medium lg:font-bold font-[Inter] leading-[20px] lg:mb-[14px] text-sm lg:block">admin@admin.com</a>
                    <p class="text-gray-500 hidden lg:block lg:text-sm">&copy; 2011—2021</p>
                </div>
            </div>
        </app-width>

        <div class="border-b border-dashed border-[#00000014] mt-[19px] mb-[27px] lg:hidden"></div>

        <app-width class="txt flex flex-col items-center lg:block pb-[39px] lg:pb-0 lg:flex-grow">
            <div class="mb-[27px] lg:mb-0 lg:flex lg:justify-between lg:items-center lg:gap-x-[112px] text-[#979797]">
                <div class="lg:w-1/2">
                    <p class="whitespace-nowrap text-sm text-center leading-5 font-normal lg:font-medium font-[Inter] mb-4 lg:mb-[19px] lg:text-left">Информация</p>
                    <p class="whitespace-nowrap text-sm text-center leading-5 font-normal lg:font-medium font-[Inter] mb-4 lg:mb-[19px] lg:text-left">О проекте</p>
                    <p class="whitespace-nowrap text-sm text-center leading-5 font-normal lg:font-medium font-[Inter] mb-4 lg:mb-[19px] lg:text-left">Адреса и телефоны</p>
                </div>
                <div class="lg:w-1/2">
                    <p class="whitespace-nowrap text-sm text-center leading-5 font-normal lg:font-medium font-[Inter] mb-4 lg:mb-[19px] lg:text-left">Политика обработки персональных данных</p>
                    <p class="whitespace-nowrap text-sm text-center leading-5 font-normal lg:font-medium font-[Inter] mb-4 lg:mb-[19px] lg:text-left">Пользовательское соглашение</p>
                    <p class="whitespace-nowrap text-sm text-center leading-5 font-normal lg:font-medium font-[Inter] mb-4 lg:mb-[19px] lg:text-left">Реклама на сайте</p>
                </div>
            </div>
            <p class="text-[#979797] lg:hidden font-medium text-base lg:text-sm leading-5 font-[Inter] text-center">&copy; 2011—2021</p>
        </app-width>
    </footer>
</template>

<style lang="scss">
footer {
    background-color: #f4faff;

    @include break_point(768px) {
        padding: 0 60px;
        .body {
            padding: 0;
        }
    }
}
</style>
