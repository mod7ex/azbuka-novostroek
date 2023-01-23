<script lang="ts" setup>
defineProps<{ city?: any; complex?: string }>();
</script>

<template>
    <div :class="['breadcrumb flex gap-2 items-start justify-start text-[#8C8C8C] text-[10px] font-[Inter] leading-[13px] font-light', $attrs.class]">
        <app-i name="fa6-solid:house" class="h-3 w-[14px]" />
        <div class="flex flex-wrap gap-2 items-center justify-start">
            <span>&#62;</span>
            <p class="whitespace-nowrap">{{ city?.name }}</p>
            <span>&#62;</span>
            <p class="whitespace-nowrap">{{ city?.region?.name }}</p>
            <span>&#62;</span>
            <p class="whitespace-nowrap text-[#3478F6] text-[11px] font-normal">{{ complex }}</p>
        </div>
    </div>
</template>
