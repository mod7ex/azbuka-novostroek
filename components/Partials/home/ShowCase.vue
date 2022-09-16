<template>
    <section :class="['mx-auto md:flex md:items-end md:justify-between md:w-11/12']">
        <div class="mb-4">
            <div class="mb-6 text-center md:text-left">
                <h1 class="text-4xl font-black mb-2">
                    <p>База новостроек</p>
                    <p class="hidden md:block whitespace-nowrap">от застройщиков</p>
                </h1>
                <h4 class="text-xl font-light text-gray-600">Ростова-на-Дону и Ростовской области</h4>
            </div>
            <Button label="Подробнее" class="mx-auto block md:inline" />
        </div>

        <div>
            <div class="svg-container mx-auto relative h-56 md:h-80 w-full">
                <app-img class="w-full h-full" src="~/assets/img/Group.png" alt="" />
                <app-img class="absolute" src="~/assets/svg/group.svg" alt="" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.svg-container {
    // @include bg-img("Group.png");
    // background-size: 100%;
    // background-position: center bottom;

    max-width: 20rem;

    img:last-of-type {
        bottom: 0;
        top: 1rem;
        left: 4rem;
        width: 12rem;
    }

    @media screen and (min-width: 761px) {
        max-width: 30rem;

        img:last-of-type {
            // top: -5rem;
            // left: 0;
            // height: 200%;
            // width: 90%;

            top: 5rem;
            left: 0;
            height: 100%;
            width: 90%;
        }
    }
}
</style>
