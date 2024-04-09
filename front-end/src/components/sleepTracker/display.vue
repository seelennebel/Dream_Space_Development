<script>
import { ref } from 'vue';

export default {
  setup() {
    const wakeUpTime = ref('');
    const chosenHour = ref('');

    const displayChosenHour = () => {
      chosenHour.value = wakeUpTime.value;
    };

    return {
      wakeUpTime,
      chosenHour,
      displayChosenHour
    };
  }
};
</script>
  
<template>
    <div class="wake-up-display">
      <div class="wake-up-time">
        <label for="wakeUpTime">Enter Your Desired Wake-up Time:</label>
        <input type="time" id="wakeUpTime" v-model="wakeUpTime" @change="displayChosenHour" />
      </div>
      <div v-if="chosenHour" class="display container">
        <div class="wake-up-hour display">
          <p>{{ chosenHour }}</p>
        </div>
      </div>
    </div>
  </template>
  
<style scoped>
.wake-up-display {
  padding: 10px;
}

.wake-up-time {
  display: flex;
  flex-direction: row;
  width: auto;
  height: 100%;
  background-color: var(--container-backrgroundcolor);
  padding: 30px;
  border-radius: 10px;
  margin: 10px;
  border: thick white dotted;
}

.wake-up-hour.display{
    margin: 10px;
  border: thick white dotted;
}

.button {
  background-color: var(--container-backrgroundcolor);
  width: max-content;
  border-radius: 10px;
  color: white;
}

.display.container {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px;
  width: auto;
  height: auto;
  padding: 0px;
  color: white;
  border-radius: 10px;
}

.wake-up-hour.display {
  border-radius: 10px;
  width: auto;
  height: 70px;
  background-color: var(--container-backrgroundcolor);
  padding: 30px 30px 10px 10px;
  margin: 10px;
}
</style>
