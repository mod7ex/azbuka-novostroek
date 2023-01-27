<script setup lang="ts">
import CTASVG from "~/assets/svg/cta.svg";
import { SECTIONS, CONTACT } from "~/constants";
</script>

<template>
    <div :class="$attrs.class">
        <div class="shadow-inner-md sticky top-2 flexible-pt">
            <div class="mx-auto w-fit">
                <p class="text-[28px] leading-8 font-extrabold font-[Raleway] mb-[14px]">Позвоните нам</p>

                <div class="font-[Inter] mb-5">
                    <p class="font-extrabold text-xl leading-6 text-[#E71F61] mb-1">{{ CONTACT.PHONE }}</p>
                    <p class="font-light text-base leading-5 text-[#8C8C8C]">с 09:00 — 21:00</p>
                </div>

                <div class="mb-[23px]">
                    <p class="mb-[14px] hover:text-[#3478F6] hover:underline cursor-pointer">
                        <app-i name="ic:round-phone" class="mr-[13px] text-[#E71F61]" />
                        <span>Заказать звонок</span>
                    </p>
                    <p class="mb-[14px] hover:text-[#3478F6] hover:underline cursor-pointer">
                        <app-i name="mdi:eye" class="mr-[13px] text-[#3478F6]" />
                        <span>Записаться на просмотр</span>
                    </p>
                    <p class="mb-[14px] hover:text-[#3478F6] hover:underline cursor-pointer">
                        <app-i name="mingcute:whatsapp-fill" class="mr-[13px] text-[#4CAF50]" />
                        <span>Написать в WhatsApp</span>
                    </p>
                    <p class="hover:text-[#3478F6] hover:underline cursor-pointer">
                        <app-i name="mingcute:telegram-fill" class="mr-[13px] text-[#039BE5]" />
                        <span>Написать в Telegram</span>
                    </p>
                </div>

                <div>
                    <Button class="w-full text-white bg-[#3478F6] mb-[10px] px-0 flex items-center justify-center">
                        <span class="mr-[15px] font-[Inter] text-[14px] font-bold leading-4 whitespace-nowrap">Telgram- bot</span>
                        <app-i name="bi:android2" />
                    </Button>
                    <Button class="w-full text-white bg-[#E71F61] px-0 flex items-center justify-center">
                        <span class="mr-[15px] font-[Inter] text-[14px] font-bold leading-4 whitespace-nowrap">Чат с консультантом</span>
                        <app-i name="ph:chat-circle-text" />
                    </Button>
                </div>
            </div>

            <div>
                <app-img :src="CTASVG" alt="" class="ml-auto" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$pad: calc(10px + (56 - 10) * (100vw - 1100px) / (1441 - 1100));

.flexible-pt {
    padding-top: $pad;
    @include break_point(1441px) {
        padding-top: 56px;
    }
}
</style>
