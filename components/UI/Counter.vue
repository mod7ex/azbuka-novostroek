<script lang="ts" setup>
const props = defineProps<{ count: number }>();

const is_animating = shallowRef(true);

const data = reactive({
    current: 1,
    previous: 0,
});

watch(
    () => props.count,
    (v) => {
        data.previous = data.current;
        data.current = v;

        is_animating.value = true;

        useTimeout(() => {
            is_animating.value = false;
        }, 900);
    }
);
</script>

<template>
    <div :class="['container', $attrs.class]">
        <span v-if="is_animating" class="container_card overlay">
            <p class="overlay flip-item top back gradient-white-gray" :data-value="data.previous"></p>
            <p class="overlay flip-item bottom back back-bottom" :data-value="data.current"></p>

            <p class="overlay flip-item top front gradient-white-gray">{{ data.current }}</p>
            <p class="overlay flip-item bottom front front-bottom" :data-value="data.previous"></p>
        </span>

        <span v-else class="no-animation__card">{{ data.current }}</span>
    </div>
</template>

<style lang="scss" scoped>
$clockCountHeight: 50px;
$duration: 900ms;
$radius: 3px;
$color: white;

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
    background: linear-gradient(to bottom, $color 0%, rgb(250, 250, 250) 100%);
}

.container {
    width: $clockCountHeight;
    height: $clockCountHeight;
    position: relative;
    @include flex;
    background-color: $color;
    border-radius: $radius;

    .container_card {
        @include flex;
        perspective: 1000px;

        .flip-item {
            position: absolute;
            text-align: center;
            overflow: hidden;
            backface-visibility: hidden;
            animation-fill-mode: forwards;

            &::after {
                content: attr(data-value);
            }
        }

        .front {
            z-index: 1;
        }

        .top {
            bottom: 50%;
            transform-origin: 50% 100%;
            line-height: $clockCountHeight;
            background-color: $color;
            border-top-left-radius: $radius;
            border-top-right-radius: $radius;

            &.front {
                // transform: rotate3d(-1, 0, 0, 180deg);
                animation: flip-up-back $duration 1;
                animation-fill-mode: forwards;
            }
        }

        .bottom {
            top: 50%;
            transform-origin: 50% 0%;
            line-height: 0px;
            background: $color;
            border-bottom-left-radius: $radius;
            border-bottom-right-radius: $radius;

            &.front {
                animation: flip-up $duration 1;
                animation-fill-mode: forwards;
            }
        }
    }
}
</style>
