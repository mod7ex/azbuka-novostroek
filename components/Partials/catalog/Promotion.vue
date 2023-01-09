<script setup lang="ts">
import Promotion from "~/assets/svg/promotion.svg";
import { format_thousands } from "~/utils";
import { MS } from "~/constants";

const props = defineProps<{ discount?: any; scrollable?: boolean }>();

const generate_count_down = () => {
    let diff = new Date(props.discount?.date_end).getTime() - Date.now();

    const days = Math.floor(diff / MS.DAY);
    const hours = Math.floor((diff - MS.DAY * days) / MS.HOUR);
    const mins = Math.floor((diff - hours * MS.HOUR - days * MS.DAY) / MS.MIN);
    const sec = Math.floor((diff - mins * MS.MIN - hours * MS.HOUR - days * MS.DAY) / MS.SEC);

    return { days, hours, mins, sec };
};

let count_down = reactive<Partial<ReturnType<typeof generate_count_down>>>({});

const refresh = () => {
    let _count_down = generate_count_down();
    count_down.days = _count_down.days;
    count_down.hours = _count_down.hours;
    count_down.mins = _count_down.mins;
    count_down.sec = _count_down.sec;
};

useInterval(refresh, MS.SEC, { right_away: true });
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-0']">
            <div :class="['bg-[#E1F1FF] rounded-[3px] pt-[33px] px-[29px] md:pt-[38px] md:px-[46px] pb-[31px] md:pb-[25px] text-center promotion', !scrollable ? 'md:flex md:items-center md:justify-between md:flex-row-reverse' : '']">
                <div :class="['font-[Inter] mb-[30px]', !scrollable ? 'md:hidden' : '']">
                    <h2 class="font-bold text-xl leading-[30px]">{{ discount?.title }}</h2>

                    <h1 class="text-[#3478F6] font-bold text-xl leading-[30px] mb-[10px]" v-if="discount?.amount">Выгода до {{ format_thousands(discount?.amount) }} рублей</h1>

                    <p class="text-[#8C8C8C] font-light text-[15px] leading-5">{{ discount?.description }}</p>
                </div>

                <div class="flex-grow">
                    <div class="mx-auto w-fit">
                        <p class="font-[Raleway] font-extrabold text-[14px] leading-4 mb-[25px]">до конца акции</p>

                        <ul class="flex items-center justify-center gap-[11px] mb-[28px]">
                            <li>
                                <client-only>
                                    <Counter :count="count_down.days ?? 0" :duration="800" class="text-[#FCBD00] text-[22px] font-black leading-[26px] mb-[7px]" />
                                </client-only>
                                <!-- <span class="text-[#FCBD00] bg-white text-[22px] font-black leading-[26px] w-[54px] h-[54px] flex items-center justify-center rounded-[3px] mb-[7px]">17</span> -->
                                <p class="text-[#878787] text-[14px] font-medium leading-4">дней</p>
                            </li>
                            <li>
                                <client-only>
                                    <Counter :count="count_down.hours ?? 0" :duration="800" class="text-[#FCBD00] text-[22px] font-black leading-[26px] mb-[7px]" />
                                </client-only>
                                <!-- <span class="text-[#FCBD00] bg-white text-[22px] font-black leading-[26px] w-[54px] h-[54px] flex items-center justify-center rounded-[3px] mb-[7px]">12</span> -->
                                <p class="text-[#878787] text-[14px] font-medium leading-4">часов</p>
                            </li>
                            <li>
                                <client-only>
                                    <Counter :count="count_down.mins ?? 0" :duration="800" class="text-[#FCBD00] text-[22px] font-black leading-[26px] mb-[7px]" />
                                </client-only>
                                <!-- <span class="text-[#FCBD00] bg-white text-[22px] font-black leading-[26px] w-[54px] h-[54px] flex items-center justify-center rounded-[3px] mb-[7px]">55</span> -->
                                <p class="text-[#878787] text-[14px] font-medium leading-4">минут</p>
                            </li>
                            <li>
                                <client-only>
                                    <Counter :count="count_down.sec ?? 0" :duration="800" class="text-[#FCBD00] text-[22px] font-black leading-[26px] mb-[7px]" />
                                </client-only>
                                <p class="text-[#878787] text-[14px] font-medium leading-4">секунды</p>
                            </li>
                        </ul>

                        <button class="mb-4 mx-auto block bg-[#E71F61] rounded-[3px] py-[21px] w-[181px]">
                            <span class="flex items-center justify-center gap-[13px] text-white">
                                <app-i name="ic:round-local-phone" />
                                <p class="text-[15px] font-bold leading-[17px] font-[Raleway]">Позвонить</p>
                            </span>
                        </button>

                        <a class="text-[#3478F6] font-semibold text-[15px] leading-[17px] font-[Raleway]" href="javascript(void(0))">Все акции застройщика</a>
                    </div>
                </div>
                <div>
                    <div v-if="!scrollable" class="font-[Inter] mb-[41px] hidden md:block text-left">
                        <h2 class="font-extrabold text-[28px] leading-[32px] mb-[5px]">{{ discount?.title }}</h2>

                        <h1 class="text-[#3478F6] font-bold text-[22px] leading-[26px] mb-[11px]" v-if="discount?.amount">Выгода до {{ format_thousands(discount?.amount) }} рублей</h1>

                        <p class="text-[#8C8C8C] font-light text-[15px] leading-5 max-w-[29ch]">{{ discount?.description }}</p>
                    </div>

                    <app-img :src="Promotion" class="mx-auto mt-[45px]" />
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped lang="scss">
.promotion {
    @include bg-img("cloud-promotion.png") {
        background-position: left bottom;
        background-size: 93% 44%;
    }

    @include break_point(768px) {
        background-size: 42% 78%;
    }
}
</style>
