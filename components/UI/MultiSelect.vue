<script setup lang="ts">
import { uuidGen } from "~/utils";

const props = withDefaults(defineProps<{ options?: SelectOptions<number, string>[]; modelValue?: number[] }>(), {});

const emit = defineEmits(["update:modelValue"]);

const handel = (e: number) => {
    const v = new Set(props.modelValue);
    if (v.has(e)) v.delete(e);
    else v.add(e);
    emit("update:modelValue", Array.from(v.values()));
};

const ID = uuidGen()();
</script>

<template>
    <!-- prettier-ignore -->
    <ul :class="[$attrs.class]" >
        <slot name="before" />

        <li>
            <label v-for="{ label, value } in options" :key="value" :for="`${ID}-${value}`" class="flex gap-3 px-3 py-[6px] cursor-pointer hover:bg-gray-100">
                <input
                    type="checkbox"
                    :id="`${ID}-${value}`"
                    @input="() => handel(value)"
                    :checked="modelValue.includes(value)"
                />
                <p>{{ label }}</p>
            </label>
        </li>
    </ul>
</template>
