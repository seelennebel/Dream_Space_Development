<script setup>

import { get_time, get_clock, trim_clock, zeroer} from "../../assets/chrono.js";

import { ref } from "vue";

const sleep_duration = ref("");
const time_to_fall_asleep = ref("");
const time_to_sleep = ref("");

const bed_hours = ref("");
const bed_minutes = ref("");

const hours = ref("");
const minutes = ref("");

const handler = () =>
{
    
let duration = parseFloat(get_time(sleep_duration.value));
let fall_asleep = parseInt(get_time(time_to_fall_asleep.value));
let to_sleep = (trim_clock(get_clock(time_to_sleep.value)));

let curr_minutes = (parseInt(to_sleep[0]) * 60) + parseInt(to_sleep[1]);
let sum_minutes = curr_minutes - fall_asleep + (duration * 60);
let bed_time = curr_minutes - fall_asleep;

let result = [0, 0];

if(sum_minutes > 1440)
{
    let dif = sum_minutes - 1440 + fall_asleep;
    result[0] = dif / 60;
    result[1] = dif % 60;
}
else
{
    result[0] = sum_minutes / 60;
    result[1] = sum_minutes % 60;

}

hours.value = zeroer(parseInt(result[0]));
minutes.value = zeroer(parseInt(result[1]));

bed_hours.value = zeroer(Math.floor(bed_time / 60));
bed_minutes.value = zeroer(bed_time % 60);

}
</script>

<template>
<div id = "left">
    <div id = "left-form">
        <div id = "form-container">
                <p>SELECT THE DURATION OF SLEEP</p>        
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
                <option>0</option>
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
            <p class = "result"> {{ bed_hours }}:{{ bed_minutes }}</p>
        </div>
        <div>
            <p class = "result">WAKE UP AT</p>
            <p class = "result">{{ hours }}:{{ minutes }}</p>
        </div>
    </div>
</div>
</template>

<style scoped>

    #top-result
    {
        padding-top: 1.45em;
    }

    .result
    {
        font-size: 1em;
        font-weight: 500;
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
        height: fit-content;
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
            
        font-size: 1em;
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