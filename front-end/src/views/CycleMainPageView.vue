<script setup>

import REM from "../components/sleep_cycle_view/REM.vue";
import NREM from "../components/sleep_cycle_view/NREM.vue";
import CycleLink from "..//components/sleep_cycle_view/CycleLink.vue";

import NavBar from "../components/NavBar.vue";

</script>

<template>
        <div id = "globa">
            <NavBar />
            <div id = "central">
                <div>
                    <p id = "learn-div"> Learn more about 2 phases of human sleep </p>
                </div>
                <div id = "central-flex">
                    <div class = "central-element">
                        <REM />
                    </div>
                    <div class = "central-element">
                        <NREM />
                    </div>
                </div>
                <CycleLink />
            </div>
        </div>
</template>

<style scoped>

#globa
{
    background-image: url("../assets/photos/sky.jpg");
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#central
{
    margin-top: 3em;

}

#learn-div
{
    text-align: center;
    padding-top: 2em;
    padding-bottom: 2em;
    font-size: 1.3em;

}

#central-flex
{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 2em;
    padding-bottom: 2em;

}

main
{
    height: 100%;
}

</style>