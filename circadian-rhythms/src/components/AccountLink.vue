<template>
    <div id = "container">
        <img src = "../assets/svg_photos/Rectangle.svg">
        <h1 class = "element" id = "text">MY ACCOUNT</h1>
    </div>
</template>

<style scoped>

    #container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    #text
    {
        padding-left: 1em;
    }

    #element
    {
        background-size: 100% 100%;
    }

    h1
    {
        font-size: 1em;
        font-style: "Roboto Mono", monospace;
    }
</style>