<script setup>

import NavBar from "/src/components/NavBar.vue"; 


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
        background-image: url("../assets/photos/sky.jpg");
        width: 100%;
        height:100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    
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
        font-weight: normal;
        letter-spacing: 1em;
        font-size: 40px;
        font-family: "Roboto Mono", monospace;
        margin-top: 0;

    }

    h2
    {
        text-align: center;
        color: white;
        font-weight: normal;
        font-size: 25px;
        font-family: "Roboto Mono", monospace;
        margin-bottom: 0;

    }
</style>