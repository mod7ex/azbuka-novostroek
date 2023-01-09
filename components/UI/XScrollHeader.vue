<script setup lang="ts">
import { isObject, isPlainObject } from "~/utils/types";

interface Props {
    choices: string[] | { label: string; value: Numberish }[];
    modelValue: Numberish;
    buttons?: true;
    padding?: boolean;
    dottedBorder?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    padding: true,
    dottedBorder: true,
});

const emit = defineEmits(["update:modelValue"]);

const handle = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;

    const index = Number(target.dataset.index);

    if (isNaN(index)) return;

    const choice = props.choices[index];

    emit("update:modelValue", isPlainObject(choice) ? choice.value : index);
};

const isSelected = (v: unknown, index: number) => {
    if (isObject(v)) return v?.value === props.modelValue;
    return index === props.modelValue;
};
</script>

<template>
    <div @click="handle" v-if="buttons" :class="['overflow-x-scroll flex gap-2 no-scroll-thum font-medium text-[13px] md:text-base md:leading-[19px] leading-[15px] font-[Inter]', $attrs.class]">
        <button v-for="(choice, i) in choices" :key="`${i}-${modelValue}`" :data-index="i" :class="['whitespace-nowrap py-2 px-[10px] rounded-[3px]', isSelected(choice, i) ? 'bg-[#1DA958] text-white' : 'bg-[#D2EEDE]']">
            {{ isObject(choice) ? choice.label : choice }}
        </button>
    </div>

    <div v-else :class="['choices no-scroll-thum overflow-x-scroll', $attrs.class]">
        <header :class="['flex gap-[30px] text-[15px] leading-[18px] font-[Inter] border-b-[2px]', dottedBorder ? 'border-dotted' : 'border-transparent']" @click="handle">
            <button v-for="(choice, i) in choices" :key="i" :data-index="i" :class="[isSelected(choice, i) ? 'selected font-medium text-[#131313]' : 'font-normal text-[#878787]', padding ? 'md:pb-[28px] md:px-6' : 'md:pb-[3px]', 'pb-[13px] whitespace-nowrap']">
                {{ isObject(choice) ? choice.label : choice }}
            </button>
        </header>
    </div>
</template>

<style lang="scss" scoped>
.choices {
    header {
        min-width: fit-content;
    }

    button.selected {
        position: relative;
        &::after {
            content: " ";
            z-index: 1;
            background-color: #1da958;
            padding: 1px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            border-radius: 3px;
        }
    }
}
</style>
