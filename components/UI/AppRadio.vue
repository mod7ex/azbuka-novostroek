<script setup lang="ts">
import { uuidGen } from "~/utils";

const props = defineProps<{
    options: Record<"value" | "label", Numberish>[];
    modelValue?: Numberish;
}>();

const emit = defineEmits(["update:modelValue"]);

const uuid = uuidGen("mobile-filter");

const IDS = Array.from(Array(props.options.length).keys()).map(() => uuid());

const name = uuid("radio-name-ui");

const handelInput = (e: Event) => {
    emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
    <ul :class="[$attrs.class, 'flex flex-col gap-4']">
        <li v-for="({ label, value }, i) in options" :key="i">
            <label :for="IDS[i]" class="flex items-center gap-[15px]">
                <input :name="name" :id="IDS[i]" type="radio" :value="value" @change="handelInput" :checked="modelValue == value" />
                <span class="text-sm font-normal leading-5 font-[Inter]">{{ label }}</span>
            </label>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
input[type="radio"] {
    width: 24px;
    height: 24px;
    position: relative;
    @include flex;
    background-color: #fafcfe;
    appearance: none;

    &::before {
        content: " ";
        border: 1.6px solid rgba(29, 169, 88, 0.08);
        position: absolute;
        border-radius: 50%;
        background-color: transparent;
        width: 24px;
        height: 24px;
    }

    &::after {
        content: " ";
        position: absolute;
        border-radius: 50%;
        background-color: #e8e8e8;
        width: 10px;
        height: 10px;
        transition: background-color $duration ease;
    }

    &:checked {
        &::after {
            background-color: #1da958;
        }
    }
}
</style>
