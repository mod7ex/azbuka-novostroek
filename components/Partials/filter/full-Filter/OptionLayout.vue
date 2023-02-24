<script lang="ts" setup>
const props = withDefaults(defineProps<{ label: string; tag?: string; disabled?: boolean }>(), {
    tag: "div",
});

const [isCollapsed, toggle] = useToggle();
</script>

<template>
    <component :is="tag" class="relative">
        <button
            @click="
                () => {
                    !disabled && toggle();
                }
            "
            :class="['border border-transparent w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] rounded-[3px]', disabled ? 'cursor-auto' : 'focus:border-[#1DA958] focus:bg-white']"
        >
            {{ label }}
        </button>

        <filter-wrapper :is-collapsed="isCollapsed" :handel-blur="() => toggle(true)" class="absolute left-0 right-0 top-[3.2rem] bg-white app-shadow z-50">
            <slot />
        </filter-wrapper>
    </component>
</template>
