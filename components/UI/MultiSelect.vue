<script setup lang="ts">
import { uuidGen } from "~/utils";

const props = defineProps<{
    options?: SelectOptions<number, string>[];
    modelValue?: number | number[];
    single?: true;
    reset?: true;
}>();

const emit = defineEmits(["update:modelValue"]);

const handel = (e: number) => {
    if (props.single === true) {
        emit("update:modelValue", e);
    } else {
        const v = new Set(props.modelValue as number[]);
        if (v.has(e)) v.delete(e);
        else v.add(e);
        emit("update:modelValue", Array.from(v.values()));
    }
};

const ID = uuidGen()();
</script>

<template>
    <!-- prettier-ignore -->
    <ul :class="[$attrs.class]" >
        <slot name="before" />

        <li v-for="{ label, value } in options" :key="value" :for="`${ID}-${value}`">
            <label class="flex gap-3 px-3 py-[6px] cursor-pointer hover:bg-gray-200">
                <input
                    type="checkbox"
                    :id="`${ID}-${value}`"
                    @input="() => handel(value)"
                    :checked="(props.single === true) ? value === modelValue : (modelValue as number[]).includes(value)"
                />
                <p>{{ label }}</p>
            </label>
        </li>

        <li v-if="reset" class="border-t">
            <button @click="() => emit('update:modelValue', (props.single === true) ? undefined :  [])" class="px-3 py-[6px] cursor-pointer hover:bg-gray-200 w-full">Не выбрано</button>
        </li>
    </ul>
</template>
