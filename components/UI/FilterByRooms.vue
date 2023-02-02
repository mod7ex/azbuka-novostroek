<script setup lang="ts">
withDefaults(defineProps<{ isCollapsed?: boolean; options?: { label: string; value: Numberish }[]; handelBlur?: () => void; modelValue?: number[] }>(), {});

const payload = reactive({});

const emit = defineEmits(["update:modelValue"]);

watch(payload, (v) => {
    const _payload = Object.entries(v)
        .filter(([key, val]) => {
            return !!val;
        })
        .map(([key, val]) => key);

    emit("update:modelValue", _payload);
});
</script>

<template>
    <!-- prettier-ignore -->
    <filter-wrapper
        :is-collapsed="isCollapsed"
        @blured="handelBlur"
        class="absolute top-7 z-50 bg-white app-shadow rounded py-[6px] min-w-[200px]"
    >
        <slot name="before" />

        <label v-for="item in options" :key="item.value" :for="`room-count_${item.label}-${item.value}`" class="flex gap-3 px-3 py-[6px] cursor-pointer hover:bg-gray-100">
            <input type="checkbox" :id="`room-count_${item.label}-${item.value}`" v-model="payload[item.value]" />
            <p class="text-xs">{{ item.label }}</p>
        </label>
    </filter-wrapper>
</template>
