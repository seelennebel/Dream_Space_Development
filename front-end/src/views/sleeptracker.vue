<script setup>

import NavBar from "../components/NavBar.vue";
import dashboard from "../components/sleepTracker/dashboard.vue"
import notifyBedTime from "../components/sleepTracker/notifyBedTime.vue"
import articleRoute from "../components/sleepTracker/articleRoute.vue"
import display from "../components/sleepTracker/display.vue"

</script>

<template>
    <div class="main-div">
    <NavBar/>
    <main>
        <h2 class="bedtime-notification">Bedtime Notification</h2>
        <div class="notify-display-bar">
            <div class="notify-display">
                <notifyBedTime/>
                <display/>
            </div>
        </div>
        <div class="dashboard-route">
            <dashboard/>
            <articleRoute/>
        </div>
    </main>
</div>
</template>
<style scoped>
.main-div{
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow-y: auto;
    height: 100%;
    background-image: url("../assets/photos/sky.jpg");;
}
h2{
    text-align: center;
    font-family: var(--Roboto-Serif);;
}

.notify-display-bar{
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin: 10px;
    padding: 10px;
}

.notify-display{
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 100%;
    width: 100%;
    margin: 20px;
    padding: 10px;
}

.dashboard-route{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
}

</style>