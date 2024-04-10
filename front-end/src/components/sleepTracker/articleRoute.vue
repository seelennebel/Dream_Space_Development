<script setup>
import { RouterLink } from "vue-router"

</script>

<template>
    <div class="blog-route container">
        <div class="text-link">
            <div class="text container-item">
                <span id="problem-text">Have a problem</span>
                <br>
                <span id="sleeping-text"> Sleeping?</span>
            </div>
            <div class="read container-item">
                <RouterLink to = "../views/ArticlesPageView.vue" class="link">
                    <span>Check these articles ! </span>
                </RouterLink>
            </div>
        </div>
        <div class="image container-item">
            <img src="../assets/photos/sleep.png" alt="A person with problems to fall asleep" width="200px" height="170px">
        </div>
    </div>
</template>

<style scoped>
 .blog-route{
        display: flex;
        flex-direction: row;
        height: auto;
        width: auto;
        align-items: center;
        justify-content: center;
    }

    .text-link{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .text.container-item{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 75px;
        align-items: flex-start;
        margin: 5px 5px 5px 0;
        padding: 6px 6px 6px 0;
    }

    #problem-text{
        color: rgb(202, 78, 78);
    }

    #sleeping-text{
        color: azure;
    }
    .read.container-item{
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 20px 10px 25px 0;
        margin:20px 10px 25px 0;

    }
    .link{
        text-decoration: none;
        color: rgb(20, 0, 255);
        width: 100%;
        height: 100%;
        padding: 20px;
        padding-left: 0;
        margin: 20px;
        padding-right:0 ;
        margin-right: 0;
        margin-left: 0;
        align-items: flex-start;
        justify-content:flex-start; 
        background-color: azure;
    }
</style>