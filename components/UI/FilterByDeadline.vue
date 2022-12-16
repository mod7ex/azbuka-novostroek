<script setup lang="ts">
interface IDeadline {
    quarter_end?: Numberish;
    year_end?: Numberish;
}

const props = withDefaults(defineProps<{ isCollapsed?: boolean; handelBlur?: () => void; modelValue?: IDeadline; options?: IDeadline[] }>(), {});

const emit = defineEmits(["update:modelValue"]);

const deadlineToLabel = (e: IDeadline) => `до ${e?.quarter_end} кв. ${e?.year_end}`;

const handelSelect = (e: IDeadline) => {
    console.log(e);
    emit("update:modelValue", e);
};

const isSelected = (e: IDeadline) => {
    const { modelValue } = props;

    if (!e?.quarter_end && !modelValue?.quarter_end && !e?.year_end && !modelValue?.year_end) return true;

    return e?.quarter_end === modelValue?.quarter_end && modelValue?.year_end === e?.year_end;
};

const E = { quarter_end: -1, year_end: -1 };
</script>

<template>
    <Transition name="slide-up-fade-out" :aria-expanded="isCollapsed">
        <Blurable class="absolute top-7 z-50 bg-white app-shadow rounded py-[6px] min-w-[200px]" tag="div" @blured="handelBlur" v-if="!isCollapsed">
            <span class="px-2 w-full block">
                <button @click="() => handelSelect(E)" :class="['w-full px-4 py-2 text-left hover:bg-gray-100 rounded text-xs', isSelected(E) ? 'bg-gray-300' : '']">Сдан</button>
            </span>
            <hr />
            <ul>
                <li v-for="(e, i) in options" :key="i" class="px-2">
                    <button @click="() => handelSelect(e)" :class="['px-4 py-2 w-full text-left hover:bg-gray-100 rounded text-xs', isSelected(e) ? 'bg-gray-300' : '']">
                        {{ deadlineToLabel(e) }}
                    </button>
                </li>
            </ul>
            <hr />
            <span class="px-2 w-full block">
                <button @click="() => handelSelect({})" :class="['w-full px-4 py-2 text-left hover:bg-gray-100 rounded text-xs', isSelected({}) ? 'bg-gray-300' : '']">Не выбран</button>
            </span>
        </Blurable>
    </Transition>
</template>
