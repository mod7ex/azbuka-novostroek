<script setup lang="ts">
const props = withDefaults(defineProps<{ isCollapsed?: boolean; options?: SelectOptions<number, string>[]; handelBlur?: () => void; modelValue?: number[] }>(), {});

const emit = defineEmits(["update:modelValue"]);

const handel = (e: number) => {
    const v = new Set(props.modelValue);
    if (v.has(e)) v.delete(e);
    else v.add(e);
    emit("update:modelValue", Array.from(v.values()));
};
</script>

<template>
    <!-- prettier-ignore -->
    <filter-wrapper
        :is-collapsed="isCollapsed"
        @blurred="handelBlur"
        class="absolute top-7 z-50 bg-white app-shadow rounded py-[6px] min-w-[200px]"
    >
        <slot name="before" />

        <label v-for="{ label, value } in options" :key="value" :for="`room-count-${value}`" class="flex gap-3 px-3 py-[6px] cursor-pointer hover:bg-gray-100">
            <!-- prettier-ignore -->
            <input
                type="checkbox"
                :id="`room-count-${value}`"
                @input="() => handel(value)"
                :checked="modelValue.includes(value)"
            />
            <p class="text-xs">{{ label }}</p>
        </label>
    </filter-wrapper>
</template>
