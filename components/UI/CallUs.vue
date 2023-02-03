<script setup lang="ts">
import { CONTACT } from "~/constants";
</script>

<template>
    <!-- prettier-ignore -->
    <a
        :href="`tel:${CONTACT.RAW_PHONE}`"
        :class="[
            'flex items-center justify-center h-[28px] w-[28px] md:w-10 md:h-10 relative bg-[#E71F61] rounded-full cursor-pointer',
            $attrs.class
        ]"
    >
        <app-i class="absolute text-white w-3 h-3 md:w-5 md:h-5" name="ic:round-local-phone" />
    </a>
</template>
