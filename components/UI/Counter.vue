<script lang="ts" setup>
const props = withDefaults(defineProps<{ count: number; initial?: number; duration?: number }>(), {
    initial: 0,
    duration: 2000,
});

const data = reactive({
    current: props.initial + 1,
    previous: props.initial,
});

const frontTopRef = shallowRef<HTMLParagraphElement>();
const frontBottomRef = shallowRef<HTMLParagraphElement>();

const ANIMATE_CLASS = "animate";

watch(
    () => props.count,
    (v) => {
        data.current = v;

        frontTopRef.value?.classList.add(ANIMATE_CLASS);
        frontBottomRef.value?.classList.add(ANIMATE_CLASS);

        useTimeout(() => {
            frontTopRef.value?.classList.remove(ANIMATE_CLASS);
            frontBottomRef.value?.classList.remove(ANIMATE_CLASS);

            data.previous = v;
        }, props.duration);
    },
    { immediate: true }
);

onMounted(() => {
    frontTopRef.value.style.animationDuration = `${props.duration}ms`;
    frontBottomRef.value.style.animationDuration = `${props.duration}ms`;
});
</script>

<template>
    <div :class="['container', $attrs.class]" :style="`--duration: ${duration}ms`">
        <!-- inject prop into styles -->
        <p class="overlay flip-item top back gradient-white-gray" :data-value="data.previous"></p>
        <p class="overlay flip-item bottom back back-bottom" :data-value="data.current"></p>

        <p ref="frontTopRef" :class="['overlay flip-item top front gradient-white-gray']">{{ data.current }}</p>
        <p ref="frontBottomRef" :class="['overlay flip-item bottom front front-bottom']" :data-value="data.previous"></p>
    </div>
</template>

<style lang="scss" scoped>
$clockCountHeight: 50px;
$radius: 3px;
$color: white;
// $duration: 2000ms;

@keyframes flip-up {
    from {
        transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
        transform: rotate3d(1, 0, 0, 180deg);
    }
}

@keyframes flip-up-back {
    from {
        transform: rotate3d(-1, 0, 0, 180deg);
    }
    to {
        transform: rotate3d(0, 0, 0, 0deg);
    }
}

.gradient-white-gray {
    background: linear-gradient(to bottom, $color 0%, rgb(248, 248, 248) 100%);
}

.container {
    width: $clockCountHeight;
    height: $clockCountHeight;
    position: relative;
    @include flex;
    background-color: $color;
    border-radius: $radius;
    perspective: 1000px;

    .flip-item {
        text-align: center;
        overflow: hidden;
        backface-visibility: hidden;
        animation-fill-mode: forwards;

        &::after {
            content: attr(data-value);
        }
    }

    .top {
        bottom: 50%;
        transform-origin: 50% 100%;
        line-height: $clockCountHeight;
        background-color: $color;
        border-top-left-radius: $radius;
        border-top-right-radius: $radius;
    }

    .bottom {
        top: 50%;
        transform-origin: 50% 0%;
        line-height: 0px;
        background: $color;
        border-bottom-left-radius: $radius;
        border-bottom-right-radius: $radius;
    }

    .front {
        z-index: 1;

        // animation-duration: $duration;
        animation-fill-mode: forwards;

        &.top.animate {
            transform: rotate3d(-1, 0, 0, 180deg);
            animation-name: flip-up-back;
        }
        &.bottom.animate {
            animation-name: flip-up;
        }
    }
}
</style>

<!-- For some reason the css variable isn't being catched here -->
<!--
    <style>
    .front.top.animate {
        transform: rotate3d(-1, 0, 0, 180deg);
        animation: flip-up-back var(--duration) 1;
        animation-fill-mode: forwards;
    }

    .front.bottom.animate {
        animation: flip-up var(--duration) 1;
        animation-fill-mode: forwards;
    }
    </style> 
-->
