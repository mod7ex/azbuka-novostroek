<script lang="ts" setup>
defineProps<{ label: string }>();

const [isCollapsed, toggle] = useToggle();
</script>

<template>
    <div class="relative">
        <button @click="() => toggle()" class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">
            {{ label }}
        </button>

        <filter-wrapper :is-collapsed="isCollapsed" :handel-blur="() => toggle(true)" class="absolute left-0 right-0 top-[3.2rem] bg-white app-shadow z-50">
            <slot />
        </filter-wrapper>
    </div>
</template>
