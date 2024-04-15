<script setup>
import NavBar from "../components/NavBar.vue";
import articleRoute from "../components/sleepTracker/articleRoute.vue";
import { ref, shallowRef, watch, nextTick, onMounted, onUpdated } from 'vue';
import Chart from 'chart.js/auto';

const sleepEntries = ref([]);
const sleepChartEl = ref(null);
const sleepChart = shallowRef(null);
const bedTime = ref('');
const wakeUpTime = ref('');
const selectedDate = ref('');
const calculatedSleepHours = ref(null);

const calculateSleepHours = () => {
    if (bedTime.value && wakeUpTime.value && selectedDate.value) {
        const [bedHours, bedMinutes] = bedTime.value.split(':').map(Number);
        const [wakeUpHours, wakeUpMinutes] = wakeUpTime.value.split(':').map(Number);

        let sleepHours = wakeUpHours - bedHours;
        let sleepMinutes = wakeUpMinutes - bedMinutes;

        // If the wake-up time is ahead of the bedtime, adjust the sleep hours
        if (sleepHours < 0 || (sleepHours === 0 && sleepMinutes < 0)) {
            sleepHours += 24; // Add 24 hours to compensate for negative sleep hours
        } else if (sleepMinutes < 0) {
            sleepHours -= 1;
            sleepMinutes += 60;
        }

        calculatedSleepHours.value = sleepHours + sleepMinutes / 60;

        // Update sleep history
        updateSleepHistory(calculatedSleepHours.value, selectedDate.value);
    }
};

const updateSleepHistory = (hours, date) => {
    const existingEntryIndex = sleepEntries.value.findIndex(entry => entry.date === date);
    if (existingEntryIndex !== -1) {
        sleepEntries.value[existingEntryIndex] = {
            hours: hours.toFixed(1),
            date: date
        };
    } else {
        sleepEntries.value.push({
            hours: hours.toFixed(1),
            date: date
        })
    }
}

watch(sleepEntries, (newSleepEntries) => {
    const se = [...newSleepEntries];

    if (sleepChart.value) {
        sleepChart.value.data.labels = se
        .map(sleep => new Date(sleep.date).toLocaleDateString());
        sleepChart.value.data.datasets[0].data = se
        .map(sleep => sleep.hours);
        sleepChart.value.update();
        return;
    }

    nextTick(() => {
        sleepChart.value = new Chart(sleepChartEl.value.getContext('2d'), {
            type: 'line',
            data: {
                labels: se.map(sleep => new Date(sleep.date).toLocaleDateString()),
                datasets: [
                    {
                        label: 'Hours of Sleep',
                        data: se.map(sleep => sleep.hours),
                        backgroundColor: 'white',
                        borderColor: 'white',
                        borderWidth: 1,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
        sleepChart.value.data.labels.reverse();
        sleepChart.value.data.datasets[0].data.reverse();
    });
}, { deep: true });
</script>

<template>
    <NavBar />
    <main>
    
    <div class="main-div">
        <div>
        <h1>Sleep tracker</h1>
        </div>
        <div class="bed-wake">
                <div class="date input">
                    <h3 class="Date-input text">Select a Date: </h3>
                    <input type="date" v-model="selectedDate" @change="calculateSleepHours" />
                </div>
                <div class="bed-wake-input">
                    <div class="bedtime input">
                        <h3 class="bedtime-input text">Input Bedtime</h3>
                        <input type="time" id="bedTime" v-model="bedTime" @change="calculateSleepHours" />
                    </div>
                    <div class="wake-up input">
                        <h3 class="wakeup-input text">Input Wake-up Time</h3>
                        <input type="time" id="wakeUpTime" v-model="wakeUpTime" @change="calculateSleepHours" />
                    </div>
                </div>
                <div v-if="sleepEntries && sleepEntries.length > 0">
                <h2>Dashboard</h2>
                <div class="canvas-box">
                    <canvas ref="sleepChartEl"></canvas>
                </div>
                <div class="sleep-history">
                    <h3>Sleep Hours History</h3>
                    <ul class="history-list">
                        <li v-for="sleep in sleepEntries">
                            <span class="">{{ sleep.hours }} hours - </span>
                            <small id="date-history">
                            {{ new Date(sleep.date).toLocaleDateString() }}
                            </small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <articleRoute id = "article-route" />
    </div>
    </main>
</template>
<style scoped>

main
{
    overflow-y: scroll;
    background-image: url("../assets/photos/sky.jpg");
    background-size: cover;
    max-width: 100vw;
   

}

html, body 
{
    height: 100%;
    margin: 0;
    padding: 0;
}

#article-route
{
    padding-top: 1vw;
    padding-bottom: 6vw;
    
}

.main-div{
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: fit-content;
    align-content: center;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
}
h3, h1{
    text-align: center;
    font-family: var(--Roboto-Serif);;
}
.bed-wake-input{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
    gap: 10px;
    padding-top: 3vw;
}

.bedtime.input, .wake-up.input{
    border: white thick groove;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}


input[type = "time"], input[type = "date"]{
    border-radius: 10px;
    padding: 0;
    border: 0;
    font-family: "Roboto Mono", monospace;
    font-size: 1.5em;
    color: black;
    background-color:rgb(217, 216, 216);
    margin-top: 20px;
    outline: none;
    text-align: center;
}
.dashboard-route{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
}

.canvas-box {
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.canvas-box canvas{
    max-width: 800px;
    width: 100%;
    justify-content: center;
    align-items: center;
}

#date-history{
    padding-left: 10px;
    margin-left: 10px;
}
 .navbar 
{
    position: fixed;
    top: 0;

    width: 100%;
    z-index: 1000;
}
</style>
