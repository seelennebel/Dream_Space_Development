<script setup>

import NavBar from "../components/NavBar.vue"; 

</script>

<template>
    <div>
        <NavBar/>
      </div>
    <main>
           <h1>DREAM SPACE</h1>
                <div id="image">
                    <img src = "../assets/svg_photos/MOON.svg">
                </div>
            <h2>START YOU SLEEPING JOURNEY NOW</h2>       
    </main>
</template>
       
<style scoped>

    main
    {
        border-radius: 24px;
    }

    img
    {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 33%;
        z-index: 100;
        
    }

    h1
    {
        text-align: center;
        color: white;
        padding-top: 0,5em;
        font-weight: normal;
        letter-spacing: 1em;
        font-size: 40px;
        font-family: "Roboto Mono", monospace;

    }

    h2
    {
        text-align: center;
        color: white;
        font-weight: normal;
        font-size: 25px;
        font-family: "Roboto Mono", monospace;

    }
</style>