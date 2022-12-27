<script setup lang="ts">
import { debounce, format_thousands } from "~/utils";

interface Props {
    label?: Numberish;
    maxLabel?: Numberish;
    min?: number;
    max?: number;
    bg?: true;
    last_range?: number;
}

const props = withDefaults(defineProps<Props>(), {
    label: "",
    maxLabel: "",
    min: 500,
    max: 1000000,
});

const emit = defineEmits(["update:last_range"]);

const check = (v: string, max = props.max, min = props.min) => {
    const _v = parseInt(v?.replaceAll(" ", ""));

    if (Number.isNaN(_v)) return min;

    if (_v < min) return min;

    if (_v > max) return max;

    return _v;
};

const inputRef = ref<HTMLInputElement>();

const _handelInput = debounce((v: number) => {
    inputRef.value.value = format_thousands(v);

    emit("update:last_range", v);
});

const handelInput = (v: string) => {
    _handelInput(check(v));
};
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
                            <input ref="inputRef" :value="format_thousands(last_range)" type="text" @input="(e) => handelInput((e.target as HTMLInputElement).value)" />
                        </slot>
                    </li>
                    <li>
                        <slot name="max-label">
                            <p class="text-[#1DA958]">{{ maxLabel }}</p>
                        </slot>
                    </li>
                </ul>
            </button>

            <slot name="thums"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input {
    background-color: transparent;
    width: 100%;
}
</style>
