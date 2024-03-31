<script setup>

import AccountLink from "../components/AccountLink.vue";
import LogoLink from "../components/LogoLink.vue";
import MainSleepCycle from "../components/MainSleepCycle.vue";
import REM from "../components/REM.vue";
import NREM from "../components/NREM.vue";

</script>


<template>
    <main>
        <div id = "container">
            <div class = "flex-elements" id = "logo-link">
                <LogoLink />
            </div>
            <div class = "flex-elements" id = "main-text-header">
                <MainSleepCycle />
            </div>
            <div class = "flex-elements" id = "account-link">
                <AccountLink />         
            </div>
        </div>

        <div id = "central">
            <div>
                <p id = "learn-div"> Learn more about 2 phases of human sleep </p>
            </div>
            <div id = "central-flex">
                <div class = "central-child">
                    <REM />
                </div>
                <div class = "central-child">
                    <NREM />
                </div>
            </div>
            <div id = "bottom-text">
                <img src = "../assets/svg_photos/bottom-text.svg">
            </div>
        </div>
    </main>
</template>

<style scoped>

main
{
    background-color: var(--background-color);
}

#container
{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

#main-text-header
{
    margin-top: 1.8em;
    width: 20em
}

#logo-photo
{
    width: 10em;
}

#central
{
    background-color: var(--frame-color);
    border-style: solid;
    border-color: var(--shadow-color);
    border-width: 1em;
    margin-top: 3em;
}

#learn-div
{
    text-align: center;
    padding-top: 2em;
    font-size: 1.3em;
}

#central-flex
{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3em;
}

#bottom-text
{
    text-align: center;
    margin-top: 3em;
}

.flex-elements
{
    color: white;
    align-items: center;
    width: 15em;
}

#logo-link
{
    text-align: center;
}

</style>