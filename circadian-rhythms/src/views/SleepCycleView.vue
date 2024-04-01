<script setup>

import Form from "../components/cycle/Form.vue";

</script>

<template>
    <main>
        <div id = "header">

        </div>
        <div id = "logo">
            <img src = "../assets/svg_photos/CycleLogo.svg">
        </div>
        <div id = "main-container">
            <Form />
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
    }

    main
    {
        background: var(--frame-color);
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