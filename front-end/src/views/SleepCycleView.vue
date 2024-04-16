<script setup>

import NavBar from "../components/NavBar.vue";

import Form from "../components/cycle/Form.vue";

</script>

<template>
    <main>
        <NavBar />
        <div id = "globa">
            <div id = "logo">
                <img src = "@/assets/svg_photos/CycleLogo.svg">
            </div>
            <div id = "main-container">
                <Form />
            </div>
        </div>
    </main>
</template>

<style scoped>

    main
    {
        background-image: url("../assets/photos/sky.jpg");
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #main-container
    {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-top: 1em;
        height: 100%;
    }

    #logo
    {
        text-align: center;
    }

    img
    {
        padding-top: 2em;
        width: 15%;
    }

</style>