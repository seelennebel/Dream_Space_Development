<script setup>

import { ref } from "vue";

const sleep_duration = ref("");
const time_to_fall_asleep = ref("");
const time_to_sleep = ref("");

const hand = () =>
{
    console.log(sleep_duration);
    console.log(time_to_fall_asleep);
    console.log(time_to_sleep);
}

const get_time = (string) =>
{

    let dur = "";

    for(let i = 0; i < string.length; ++i)
    {
        if(string[i] != " ")
        {
            dur += string[i];
        }
        else
        {
            break;
        }
    }
    return dur;
}

const handler = () =>
{

    console.log(get_time(sleep_duration.value));

    
}


</script>


<template>
<div id = "left">
    <div id = "left-form">
        <div id = "form-container">
                <p>SELECT DESIRED TIME TO SLEEP</p>        
            <select id = "sleep_duration" for = "hours" v-model = "sleep_duration">
                <option disabled value = "">SELECT DURATION</option>
                <option>3 hours</option>
                <option>4.5 hours</option>
                <option>6 hours</option>
                <option>7.5 hours</option>
                <option>9 hours</option>
            </select>
            <p id = "required">ENTER REQUIRED TIME TO FALL ASLEEP</p>
            <select id = "time_to_fall_asleep" for = "sleep" v-model = "time_to_fall_asleep">
                <option disabled value = "">SELECT TIME</option>
                <option>none</option>
                <option>5 min</option>
                <option>10 min</option>
                <option>15 min</option>
                <option>20 min</option>
                <option>25 min</option>
                <option>30 min</option>
            </select>
            <p>ENTER TIME TO GO TO SLEEP</p>
            <div id = "bottom-container">
                <div>
                    <input type = "time" v-model = "time_to_sleep"/>
                </div>
                <div id = "button-container">
                    <button @click = "handler">CALCULATE</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id = "right">
    <div id = "right-container">
        <div>
            <p id = "top-result" class = "result">GO TO BED AT</p>
            <p>RESULT</p>
        </div>
        <div>
            <p class = "result">WAKE UP AT</p>
            <p>RESULT</p>
        </div>
    </div>
</div>
</template>

<style scoped>

    #top-result
    {
        padding-top: 0.5em;
    }

    .result
    {
        font-size: 1em;
    }

    #right-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    #right
    {
        width: 50%;
    }

    #left
    {
        width: 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    #button-container
    {
        width: fit-content;
    }

    button
    {
        text-align: center;
     
    }

    button[type = "submit"]
    {
        display: block;
        border: 1;
        border-color: white;
        background: none;
        padding: 0.5em;
        color: var(--text-color);
    }

    p
    {
        width: 90%;
        padding: 1.5em;
        margin-top: 1em;
        font-family: "Roboto Flex", sans-serif;
        font-optical-sizing: auto;
        font-weight: 280;
        font-style: normal;
        font-variation-settings:
            "slnt" 0,
            "wdth" 122.3,
            "GRAD" 0,
            "XOPQ" 96,
            "XTRA" 468,
            "YOPQ" 79,
            "YTAS" 750,
            "YTDE" -203,
            "YTFI" 738,
            "YTLC" 514,
            "YTUC" 712;
            
        font-size: 0.7em;
        text-align: center;
    }

    select[for = "sleep"]
    {
        display: block;
        padding: 0;
        border: 0;
        font-family: "Roboto Mono", monospace;
        font-size: 1.5em;
        color: var(--text-color);
        background-color: rgba(0,0,0,0);
    }

    #bottom-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        margin-bottom: 2em;
    }

    select[for = "hours"]
    {
        display: block;
        padding: 0;
        border: 0;
        font-family: "Roboto Mono", monospace;
        font-size: 1.3em;
        color: var(--text-color);
        background-color: rgba(0,0,0,0);
    }

    input[type = "time"]
    {
        display: block;
        padding: 0;
        border: 0;
        font-family: "Roboto Mono", monospace;
        font-size: 1.5em;
        color: var(--text-color);
        background-color: rgba(0,0,0,0);
    }

    #form-container
    {   
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

</style>