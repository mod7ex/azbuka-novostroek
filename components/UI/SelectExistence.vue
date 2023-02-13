<script setup lang="ts">
defineProps<{ modelValue?: boolean }>();

defineEmits(["update:modelValue"]);
</script>

<template>
    <!-- prettier-ignore -->
    <ul :class="[$attrs.class, 'flex flex-col']" >
        <li class="px-3 py-[6px] cursor-pointer hover:bg-gray-100" >
            <button @click="() => $emit('update:modelValue', modelValue ? null : true)" >Есть</button>
        </li>

        <li class="px-3 py-[6px] cursor-pointer hover:bg-gray-100 border-t" >
            <button @click="() => $emit('update:modelValue', null)" >Не выбрано</button>
        </li>
    </ul>
</template>
