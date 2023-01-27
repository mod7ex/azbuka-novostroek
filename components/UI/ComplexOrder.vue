<script setup lang="ts">
const [isCollapsed, toggle] = useToggle();

const { options, order, set } = useComplexOrder();

const _set = (v: string) => {
    set(v);
    toggle(true);
};
</script>

<template>
    <div class="relative filter-btn w-full">
        <button @click="() => toggle()" class="mb-1 h-11 flex w-full items-center justify-between border-2 border-[#f8f8f8] rounded-[5px] p-4 md:px-[17px]">
            <p class="text-[#131313] text-[13px] md:text-[14px] font-[Raleway] font-extralight md:font-light leading-4 italic">Сортировать по:</p>
            <span class="rounded-full relative ml-2 flex items-center justify-center h-5 w-5 bg-[#1DA958]">
                <app-i name="zondicons:cheveron-down" :class="['absolute text-white w-6 h-4 transition-all duration-300', isCollapsed ? '' : 'rotate-180']" />
            </span>
        </button>

        <Transition name="slide-up-fade-out">
            <Blurable v-if="!isCollapsed" @blured="() => toggle(true)" class="absolute shadow bg-white left-0 right-0 rounded-b-[5px] text-[#131313] text-[13px] md:text-[14px] font-[Raleway] font-extralight md:font-light leading-4">
                <!-- prettier-ignore -->
                <button
                    v-for="{ label, value } in options"
                    :key="value"
                    @click="() => _set(value)"
                    :class="['block w-full text-left p-4 md:px-[17px] hover:bg-gray-100', order === value ? 'bg-gray-200' : '']"
                >
                    {{ label }}
                </button>
            </Blurable>
        </Transition>
    </div>
</template>
