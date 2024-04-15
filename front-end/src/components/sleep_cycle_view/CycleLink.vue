<script setup>

import { RouterLink } from "vue-router"

</script>

<template>
    <div id = "global">
        <div id = "container-cycle-link">
            <div id = "one">
                <h1>Use</h1>
            </div>
            <div id = "two">
                <RouterLink to = "/cycle">
                    <img src = "../../assets/svg_photos/CycleLogo.svg">
                </RouterLink>
            </div>
            <div id = text>
                <p>to calculate what is your time to wake up
                    feeling amazing
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

    img
    {
        padding-right : 1.5vw;
    }

    #global
    {
        padding-top: 2em;
        margin-left: 15%;
        margin-right: 10%;
    }

    #two:hover
    {
        background-color: #3423A6;
        transition: background-color 0.3s ease;
    }

    #two
    { 
        border-width: 1px;
        border-color: white;
        border-style: solid;
        margin-right: 2em;
    }

    #container-cycle-link
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    #text
    {
        width: 25em;
    }

</style>