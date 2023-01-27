<script setup lang="ts">
import { isAllBuilt, onlyFewBuilt } from "~/utils";

defineProps<{ countHomes?: object }>();
</script>

<template>
    <p :class="['italic font-medium text-xs leading-[14px] font-[Inter] flex gap-2', $attrs.class]">
        <span class="text-[#1DA958]" v-if="isAllBuilt(countHomes)">{{ "Сдан" }}</span>
        <span class="text-[#3478F6]" v-else>{{ "Строится" }}</span>
        <span class="text-[#1DA958]" v-if="onlyFewBuilt(countHomes)">{{ "Есть сданные" }}</span>
    </p>
</template>
