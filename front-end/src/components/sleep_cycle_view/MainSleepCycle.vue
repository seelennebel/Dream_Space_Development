<template>
    <div id = "container">
        <div class = "elements" id = upper-text>
            <h1>LEVERAGE YOUR</h1>
        </div>
        <div class = "elements" id = "line">
            <img src = "../../assets/svg_photos/Line.svg">
        </div>
        <div id = "inner-container" class = "elements">
            <div class = "inner-elements" id = inner-text>
                SLEEP
            </div>
            <div class = "inner-elements">
                <img src = "../../assets/svg_photos/CycleLogo.svg"
            </div>
        </div>
    </div>
</template>

<style scoped>
    #container
    {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    #inner-container
    {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    #upper-text
    {
        text-align: center;
        font-size: .8em
    }
    #line
    {
        text-align: center;
    }
    #inner-text
    {
        font-size: 2em;
    }
    img
    {
        width: 100%
    }
</style>