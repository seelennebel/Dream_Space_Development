<template>
    <a href = "https://en.wikipedia.org/wiki/Rapid_eye_movement_sleep">
        <div id = "container-REM">
            <div>
                <h1 class = "elements">REM</h1>
            </div>
            <div>
                <p class = "elements">RAPID EYE MOVEMENT</p>
            </div>
        </div>
    </a>
</template>

<style scoped>

    a:hover
    {
        display: block;
        border-width: 1px;
        border-color: white;
        border-style: solid;
    }

    a
    {
        color: var(--text-color);
        text-decoration: none;
    }

    h1
    {
        font-size: 4em;
        margin: 0;
    }

    .elements
    {
        font-family: "Roboto Serif", serif;
        font-optical-sizing: auto;
        font-weight: 450;
        font-style: normal;
        font-variation-settings:
            "wdth" 100,
            "GRAD" -50;
    }

    #container-REM
    {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        padding: 1em;
    }

</style>

