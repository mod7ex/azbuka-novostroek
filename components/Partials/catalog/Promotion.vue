<script setup lang="ts">
import Promotion from "~/assets/svg/promotion.svg";

const count = shallowRef(0);

useInterval(() => {
    count.value++;
}, 1000);
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
            <div class="bg-[#E1F1FF] rounded-[3px] pt-[33px] pb-[31px] px-[29px] text-center promotion">
                <div class="font-[Inter] mb-[30px]">
                    <h2 class="font-bold text-xl leading-[30px]">Акции от застройщика</h2>

                    <h1 class="text-[#3478F6] font-bold text-xl leading-[30px] mb-[10px]">Выгода до 600 000 рублей</h1>

                    <p class="text-[#8C8C8C] font-light text-[15px] leading-5">На ряд апартаментов действуют специальные цены со скидкой</p>
                </div>

                <div>
                    <p class="font-[Raleway] font-extrabold text-[14px] leading-4 mb-[25px]">до конца акции</p>

                    <ul class="flex items-center justify-center gap-[11px] mb-[28px]">
                        <li>
                            <span class="text-[#FCBD00] bg-white text-[22px] font-black leading-[26px] w-[53px] h-[53px] flex items-center justify-center rounded-[3px] mb-[7px]">17</span>
                            <p class="text-[#878787] text-[14px] font-medium leading-4">дней</p>
                        </li>
                        <li>
                            <span class="text-[#FCBD00] bg-white text-[22px] font-black leading-[26px] w-[53px] h-[53px] flex items-center justify-center rounded-[3px] mb-[7px]">12</span>
                            <p class="text-[#878787] text-[14px] font-medium leading-4">часов</p>
                        </li>
                        <li>
                            <client-only>
                                <Counter :count="count" class="text-[#FCBD00] text-[22px] font-black leading-[26px] mb-[7px]" />
                            </client-only>
                            <!-- <span class="text-[#FCBD00] bg-white text-[22px] font-black leading-[26px] w-[53px] h-[53px] flex items-center justify-center rounded-[3px] mb-[7px]">55</span> -->
                            <p class="text-[#878787] text-[14px] font-medium leading-4">минут</p>
                        </li>
                    </ul>

                    <Button class="mb-4 mx-auto flex items-center justify-center gap-[13px] bg-[#E71F61] rounded-[3px]">
                        <app-i class="" name="ic:round-local-phone" />
                        <p>Позвонить</p>
                    </Button>

                    <a class="text-[#3478F6] font-semibold text-[15px] leading-[17px] font-[Raleway]" href="javascript(void(0))">Все акции застройщика</a>

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
}
</style>
