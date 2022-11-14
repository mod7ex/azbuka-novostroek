<script setup lang="ts">
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";

interface Props {
    label?: Numberish;
    maxLabel?: Numberish;
    minLabel?: Numberish;
    bg?: true;
    uni?: true;
}

const props = withDefaults(defineProps<Props>(), {
    label: "",
    maxLabel: "",
    minLabel: "",
});
</script>

<template>
    <div>
        <slot name="label">
            <p class="mb-[13px] md:mb-[17px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F] md:font-extrabold md:text-black">{{ label }}</p>
        </slot>

        <div class="relative">
            <button :class="[$attrs.class, 'border-[#3478f624]', bg ? 'bg-[#1da95814] md:md:bg-[#FAFCFE] md:border-[#1da95814] md:rounded-none' : 'bg-white']" class="border flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 rounded-[5px] w-full">
                <ul :class="['text-[14px] font-medium leading-4 font-[Inter] flex items-center justify-between w-full', bg ? 'text-[#4F4F4F]' : '']">
                    <li>
                        <slot name="min-label">
                            <p class="text-[#828282]">{{ minLabel }}</p>
                        </slot>
                    </li>
                    <li>
                        <slot name="max-label">
                            <p class="text-[#1DA958]">{{ maxLabel }}</p>
                        </slot>
                    </li>
                </ul>
            </button>
            <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full" :uni="uni" />
        </div>
    </div>
</template>
