<script setup>

import AccountLink from "../components/sleep_cycle_view/AccountLink.vue";
import LogoLink from "../components/sleep_cycle_view/LogoLink.vue";
import MainSleepCycle from "../components/sleep_cycle_view/MainSleepCycle.vue";
import REM from "../components/sleep_cycle_view/REM.vue";
import NREM from "../components/sleep_cycle_view/NREM.vue";
import CycleLink from "..//components/sleep_cycle_view/CycleLink.vue";

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
                <div class = "central-element">
                    <REM />
                </div>
                <div class = "central-element">
                    <NREM />
                </div>
            </div>
            <CycleLink />
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
    width: 20em
}

#logo-photo
{
    width: 10em;
}

#central
{
    background: var(--frame-color);
    border-color: var(--shadow-color);
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
    margin: 0;
}

#logo-link
{
    text-align: center;
}

</style>