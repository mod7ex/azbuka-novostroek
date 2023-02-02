<script setup lang="ts">
withDefaults(
    defineProps<{
        modelValue?: string;
        placeholder?: string;
    }>(),
    {
        placeholder: "Название новостройки или застройщика",
    }
);

defineEmits(["update:modelValue", "search" /* , "filter" */]);
</script>

<template>
    <div :class="[$attrs.class, 'flex items-center justify-between']">
        <button @click="() => $emit('search')">
            <app-i name="heroicons-outline:search" class="text-[#1DA958] w-[17px] h-[17px] md:text-[#5F5F5F] cursor-pointer" />
        </button>

        <!-- prettier-ignore -->
        <input
            @input.lazy="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
            :value="modelValue"
            :placeholder="placeholder"
            type="text"
            class="ml-4 w-full sm:flex-grow md:flex-grow-0 md:inline-block outline-none py-2"
        />

        <!-- Filter Mobile -->
        <!--
            <button @click="() => $emit('filter')" class="md:hidden">
                <app-i name="akar-icons:settings-vertical" class="text-[#1DA958] h-5 w-5" />
            </button>
        -->
    </div>
</template>

<style lang="scss" scoped>
input::placeholder {
    color: #4f4f4f;
}
</style>
