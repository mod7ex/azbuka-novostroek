<script lang="ts" setup>
const { clear, img } = useImgPreview();
</script>

<template>
    <Teleport to="body">
        <Overlay @out-click="clear" v-if="img">
            <div class="flex max-w-[600px] h-[40vh] md:h-[60vh] bg-white w-full shadow-2xl">
                <app-img :src="img" class="mx-auto h-full" />
            </div>
        </Overlay>
    </Teleport>
</template>
