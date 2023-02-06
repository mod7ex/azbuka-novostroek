<script setup lang="ts">
import TheDefaultFooter from "~/components/TheDefaultFooter.vue";
import TheDefaultHeader from "~/components/TheDefaultHeader.vue";
import ShowCase from "~/components/Partials/home/ShowCase.vue";
import Search from "~/components/Partials/filter/Search.vue";

const LazyMobileMenu = defineAsyncComponent(() => import("~/components/Partials/MobileMenu.vue"));

defineProps<{ inner?: true }>();

const [isCollapsed, toggle] = useToggle();
</script>

<template>
    <div :class="['z-0', inner ? 'inner' : '', $attrs.class]">
        <client-only>
            <image-viewer />
        </client-only>

        <div class="show-case-container">
            <div :class="['show-case-overlay relative', inner ? 'md:mb-[60px]' : '']">
                <the-default-header @toggle="() => toggle()" />

                <Transition name="slide-fade">
                    <Blurrable @blurred="() => toggle(true)" v-if="!isCollapsed" class="mobile-nav absolute z-50 top-0 left-0 right-0 bg-white app-shadow pt-5 pb-[58px]">
                        <LazyMobileMenu v-if="!isCollapsed" @close="() => toggle()" />
                    </Blurrable>
                </Transition>

                <show-case v-if="!inner" />
            </div>
        </div>

        <Search :class="['z-[100] hidden md:block']" />

        <main>
            <slot />
        </main>

        <the-default-footer />
    </div>
</template>

<style lang="scss" scoped>
.search {
    margin-top: -25px;

    @include break_point(768px) {
        margin-top: -95px;
    }
}

main {
    @include break_point(965px) {
        @include bg-img("about-cloud.png") {
            background-position: right -200px top 85%;
            background-size: 500px 800px;
        }
    }
}

.show-case-container {
    margin: 0 auto;

    @include bg-img("background.jpg");

    @include break_point(761px) {
        padding-bottom: 311.5px;
    }

    .show-case-overlay {
        background: linear-gradient(179.92deg, rgba(#edf5fe, 0.1) 14.39%, rgba(255, 255, 255, 0) 99.93%), rgba(#edf5fe, 0.3);
    }
}

.inner {
    .show-case-container {
        background: transparent;
        /* background: linear-gradient(179.92deg, rgba(229, 240, 252, 0.1) 14.39%, rgba(255, 255, 255, 0) 99.93%), rgba(229, 240, 252, 0.3); */

        @include break_point(761px) {
            padding-bottom: 183px;
        }

        .show-case-overlay {
            background: transparent;
        }
    }

    .search {
        @include break_point(768px) {
            margin-top: -192px;
        }
    }

    main {
        background: none;
    }
}

.mobile-nav {
    @include bg-img("Vector.png");
    background-position: right bottom;
    background-size: 80% 75%;
}

/* ************************************ Transition ************************************ */
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-500px);
}
</style>
