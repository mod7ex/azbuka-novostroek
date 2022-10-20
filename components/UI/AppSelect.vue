<script setup lang="ts">
import { uuidGen } from "~/utils";

const props = defineProps<{
    options: string[];
    label?: string;
    innerLabel?: string;
    bg?: true;
}>();

const len = computed(() => props.options.length);

const [isCollaped, toggle] = useToggle(false);

const uuid = uuidGen("mobile-filter");

const IDS = Array.from(Array(len).keys()).map(() => uuid());

const selectedTypesIndexes = reactive({});

const unpick = (v: number) => {
    delete selectedTypesIndexes[v];
};

const selectedTypesLables = computed(() => {
    return Object.entries(selectedTypesIndexes)
        .filter(([i, v]) => v)
        .map(([i, v]) => Number(i));
});
</script>

<template>
    <div :class="[$attrs.class, 'br-noir']">
        <slot name="label">
            <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F] md:font-extrabold md:text-black md:mb-[17px]">
                {{ label }}
            </p>
        </slot>

        <button
            @click="() => toggle()"
            class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border-[1.6px] rounded-[5px] w-full"
            :class="[`hg-${len}`, isCollaped ? 'border-b-0 rounded-b-none' : '', bg ? 'md:rounded-none border-[#3478f624] md:border-[#1da95814] bg-[#1da95814] md:bg-[#FAFCFE]' : 'border-[#f8f8f8]']"
        >
            <slot name="inner-label">
                <p class="text-[16px] leading-[14px] font-medium" :class="[bg ? 'text-[#828282]' : 'text-[#4F4F4F]']">{{ innerLabel }}</p>
            </slot>
            <app-i name="ic:baseline-keyboard-arrow-down" :class="[bg ? 'text-[#1DA958]' : 'text-[#3478F6]', ' h-5 w-5 transition-transform duration-300', isCollaped ? 'rotate-180' : '']" />
        </button>

        <Transition name="shrink">
            <ul v-if="isCollaped" :class="[bg ? 'bg-[#1da95814] border-[#3478f624] md:md:bg-[#FAFCFE] md:border-[#1da95814]' : 'border-[#f8f8f8]']" class="overflow-hidden pb-[10px] pt-[6px] px-3 border border-t-0 rounded-b-[5px]">
                <li v-for="(tp, i) in options" :key="i" class="mb-[14px]">
                    <label :for="IDS[i]" class="flex items-center gap-x-3">
                        <input v-model="selectedTypesIndexes[i]" :id="IDS[i]" type="checkbox" class="w-[18px] h-[18px] border border-[#0000001f] rounded-[2px]" />
                        <span class="font-normal text-[13px] leading-[14px] font-[Inter] text-[#141414]">{{ tp }}</span>
                    </label>
                </li>
            </ul>
        </Transition>

        <ul class="flex items-center flex-wrap">
            <li v-for="v in selectedTypesLables" :key="v" class="bg-[#3478F6] mt-3 rounded-md mr-[5px] py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ options[v] }}</span>
                <button @click="() => unpick(v)">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@mixin apartment_types_count($rows: 10) {
    @for $i from 1 through $rows {
        &.hg-#{$i} {
            height: ($i * 14px) + (6px + 10px);
        }
    }
}

.shrink-enter-active {
    transition: all 0.3s ease-out;
}
.shrink-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.shrink-enter-from,
.shrink-leave-to {
    opacity: 0;
    height: 0;
}

.shrink-enter-to {
    height: 241px;
    @include apartment_types_count;
}
.shrink-leave-from {
    height: 241px;
    @include apartment_types_count;
}

/* ****************************************************** */

input[type="checkbox"]:checked {
    position: relative;

    &::after {
        content: " ";
        @include abs-expand;
        border-radius: 2px;
        background-color: #3478f6;
    }
}
</style>
