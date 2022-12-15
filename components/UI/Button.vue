<script setup lang="ts">
withDefaults(
    defineProps<{
        label?: string | number;
        id?: string;
        disabled?: boolean;
    }>(),
    {
        label: "click",
        disabled: false,
    }
);
</script>

<template>
    <button :disabled="disabled" :id="id" :class="['font-[Raleway] rounded-[3px] shadow-md border-[1.6px] border-[#ffffff80] text-[13px] leading-[13px] font-bold cursor-pointer text-white py-5 px-[50px]', $attrs.class]">
        <slot>{{ label }}</slot>
    </button>
</template>
