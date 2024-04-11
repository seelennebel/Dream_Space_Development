<script>
import { ref, shallowRef, computed, watch, nextTick} from 'vue';
import Chart from 'chart.js/auto'

const sleepEntries = ref([])

const sleepChartEl = ref(null)

const sleepChart = shallowRef(null)

const bedTime = ref('')
const wakeUpTime = ref('')
const selectedDate = ref('')
const calculatedSleepHours = ref(null)
const calculateSleepHours = () => {
  if (bedTime.value && wakeUpTime.value && selectedDate.value) {
    const [bedHours, bedMinutes] = bedTime.value.split(':').map(Number)
    const [wakeUpHours, wakeUpMinutes] = wakeUpTime.value.split(':').map(Number)

    let sleepHours = wakeUpHours - bedHours
    let sleepMinutes = wakeUpMinutes - bedMinutes

    // If the wake-up time is ahead of the bedtime, adjust the sleep hours
    if (sleepHours < 0 || (sleepHours === 0 && sleepMinutes < 0)) {
      sleepHours += 24 // Add 24 hours to compensate for negative sleep hours
    } else if (sleepMinutes < 0) {
      sleepHours -= 1
      sleepMinutes += 60
    }

    calculatedSleepHours.value = sleepHours + sleepMinutes / 60

    // Update sleep history
    updateSleepHistory(calculatedSleepHours.value, selectedDate.value)
  }
}

const updateSleepHistory = (hours, date) => {
  const existingEntryIndex = sleepEntries.value.findIndex(entry => entry.date === date)
  if (existingEntryIndex !== -1) {
    sleepEntries.value[existingEntryIndex] = {
      hours: hours.toFixed(1),
      date: date
    }
  } else {
    sleepEntries.value.push({
      hours: hours.toFixed(1),
      date: date
    })
  }
}

watch(sleepEntries, (newSleepEntries) => {
  const se = [...newSleepEntries]

  if (sleepChart.value) {
    sleepChart.value.data.labels = se
      .map(sleep => new Date(sleep.date).toLocaleDateString())

    sleepChart.value.data.datasets[0].data = se
      .map(sleep => sleep.hours)

    sleepChart.value.update()
    return
  }

  nextTick(() => {
    sleepChart.value = new Chart(sleepChartEl.value.getContext('2d'), {
      type: 'line',
      data: {
        labels: se
          .map(sleep => new Date(sleep.date).toLocaleDateString()),
        datasets: [
          {
            label: 'Hours of Sleep',
            data: se
              .map(sleep => sleep.hours),
            backgroundColor: 'rgba(65, 105, 225, 0.2)',
            borderColor: 'rgba(65, 105, 225, 1)',
            borderWidth: 1,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
    sleepChart.value.data.labels.reverse();
    sleepChart.value.data.datasets[0].data.reverse();
  })
}, { deep: true })
</script>
  
<template>
    <div class="bed-wake">
        <div>
            <h2 class="Date-input text"> Select a Date</h2>
            <input type="date" v-model="selectedDate" @change="calculateSleepHours" />
        </div>
        <div class="bedTime-input-display">
            <div class="bedTime-input">
                <h2 class="input-headliner text">Enter Your Bed Time:</h2>
                <input type="time" id="bedTime" v-model="BedTime" @change="calculateSleepHours" />
            </div>
            <div v-if="chosenHour" class="display container">
                <div class="BedTime display">
                    <p id="display">{{ chosenHour }}</p>
                </div>
            </div>
            </div>
            <div class="wake-up-display">
            <div class="wake-up-time">
                <h2 class="input-headliner text">Enter Your Wake-up Time:</h2>
                <input type="time" id="wakeUpTime" v-model="wakeUpTime" @change="calculateSleepHours" />
            </div>
        </div>
        <div v-if="calculatedSleepHours">
      <h2>Calculated Sleep Hours</h2>
      <p>{{ calculatedSleepHours }} hours</p>
    </div>
    <div v-if="sleepEntries && sleepEntries.length > 0">
      <h2>Sleep History</h2>
      <div class="canvas-box">
        <canvas ref="sleepChartEl"></canvas>
      </div>
      <div class="sleep-history">
        <h2>Sleep Hours History</h2>
        <ul>
          <li v-for="sleep in sleepEntries">
            <span>{{ sleep.hours }} hours</span>
            <small>
              {{ new Date(sleep.date).toLocaleDateString() }}
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </template>
  
<style scoped>
.bedTime-input-display{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.BedTime-input{
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
  padding: 30px;
  border-radius: 10px;
  margin: 10px;
}
input[type = "time"]{
    border-radius: 10px;
    display: flex;
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

.BedTime.display{
    border: thin white groove;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: auto;
    height: 70px;
    padding: 30px 30px 10px 10px;
    margin: 10px;
}
#display{
    padding-left: 10px;
}
</style>