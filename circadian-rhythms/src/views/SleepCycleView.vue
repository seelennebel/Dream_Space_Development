<script setup>

import NavBar from "../components/NavBar.vue";

import Form from "../components/cycle/Form.vue";

</script>

<template>
    <main>
        <NavBar />
        <div id = "globa">
            <div id = "header">

            </div>
            <div id = "logo">
                <img src = "../assets/svg_photos/CycleLogo.svg">
            </div>
            <div id = "main-container">
                <Form />
            </div>
        </div>
    </main>
</template>

<style scoped>
    #main-container
    {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-bottom: 3em;
        padding-top: 2em;
        height: 100%;
    }

    #globa
    {
        background: var(--frame-color);
        min-height: 100%;
    }

    main
    {
        background: var(--frame-color);
        height: 100%;
        margin: 0;
    }

    #logo
    {
        text-align: center;
    }

    #header
    {
        height: 3em;
    }

    img
    {
        width: 15%;
    }

</style>