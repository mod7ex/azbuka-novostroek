<script setup lang="ts">
import { DONE_DEADLINE } from "~/constants";

const props = withDefaults(
    defineProps<{
        isCollapsed?: boolean;
        handelBlur?: () => void;
        modelValue?: any;
        options?: { value: any; label: string }[];
    }>(),
    {}
);

const emit = defineEmits(["update:modelValue"]);

const handelSelect = (e: any) => {
    emit("update:modelValue", e);
};

const isSelected = (e: any) => {
    const { modelValue } = props;

    if (!e?.quarter_end && !modelValue?.quarter_end && !e?.year_end && !modelValue?.year_end) return true;

    return e?.quarter_end === modelValue?.quarter_end && modelValue?.year_end === e?.year_end;
};
</script>

<template>
    <!-- prettier-ignore -->
    <filter-wrapper
        :is-collapsed="isCollapsed"
        @blured="handelBlur"
        class="absolute top-7 z-50 bg-white app-shadow rounded py-[6px] min-w-[200px]"
    >
        <span class="px-2 w-full block">
            <button @click="() => handelSelect(DONE_DEADLINE)" :class="['w-full px-4 py-2 text-left hover:bg-gray-100 rounded text-xs', isSelected(DONE_DEADLINE) ? 'bg-gray-300' : '']">Сдан</button>
        </span>
        <hr />
        <ul>
            <li v-for="(e, i) in options" :key="i" class="px-2">
                <button @click="() => handelSelect(e.value)" :class="['px-4 py-2 w-full text-left hover:bg-gray-100 rounded text-xs', isSelected(e.value) ? 'bg-gray-300' : '']">
                    {{ e.label }}
                </button>
            </li>
        </ul>
        <hr />
        <span class="px-2 w-full block">
            <button @click="() => handelSelect({})" :class="['w-full px-4 py-2 text-left hover:bg-gray-100 rounded text-xs', isSelected({}) ? 'bg-gray-300' : '']">Не выбран</button>
        </span>
    </filter-wrapper>
</template>
