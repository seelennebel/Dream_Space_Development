<script setup>
import { ref, shallowRef, computed, watch, nextTick } from 'vue'
import Chart from 'chart.js/auto'

const sleepEntries = ref([])

const sleepChartEl = ref(null)

const sleepChart = shallowRef(null)

const sleepInput = ref(0)
const currentDate = new Date().toISOString().substr(0, 10)
const oneYearAgo = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate()).toISOString().substr(0, 10)
const selectedDate = ref(currentDate)

const currentSleep = computed(() => {
	const selectedDateSleep = sleepEntries.value.find(entry => entry.date === selectedDate.value)
	return selectedDateSleep || { hours: 0 }
})

const addSleepHours = () => {
	const existingEntryIndex = sleepEntries.value.findIndex(entry => entry.date === selectedDate.value)
	if (existingEntryIndex !== -1) {
		sleepEntries.value[existingEntryIndex].hours = sleepInput.value
	} else {
		sleepEntries.value.push({
			hours: sleepInput.value,
			date: selectedDate.value
		})
	}
}

watch(sleepEntries, (newSleepEntries) => {
	const se = [...newSleepEntries]

	if (sleepChart.value) {
		sleepChart.value.data.labels = se
			.map(sleep => new Date(sleep.date).toLocaleDateString() )

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
	})
}, { deep: true })
</script>

<template>
    <div class="container">

<h1>Sleep Tracker</h1>

<div class="current">
  <span>{{ currentSleep.hours }}</span>
  <small>Current Hours of Sleep</small>
</div>

<form @submit.prevent="addSleepHours">
  <input 
    type="number"
    step="0.5"
    min="0"
    max="24"
    v-model="sleepInput" />

  <input
    type="date"
    :min="oneYearAgo"
    :max="currentDate"
    v-model="selectedDate" />

  <input	
    type="submit"
    value="Add/Update sleep hours" />
</form>

<div v-if="sleepEntries && sleepEntries.length > 0">

  <h2>
    Sleep History
  </h2>

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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
