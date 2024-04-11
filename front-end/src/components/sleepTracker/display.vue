<script>
import { ref } from 'vue';

export default {
  setup() {
    const wakeUpTime = ref('');
    const chosenHour = ref('')

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
        <label for="wakeUpTime">Enter Your Wake-up Time:</label>
        <input type="time" id="wakeUpTime" v-model="wakeUpTime" @change="displayChosenHour" />
      </div>
      <div v-if="chosenHour" class="display container">
        <div class="wake-up-hour display">
          <p id="display">{{ chosenHour }}</p>
        </div>
      </div>
    </div>
  </template>
  
<style scoped>
.wake-up-display {
  display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.wake-up-time{
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  border-radius: 10px;
  margin: 10px;
}
input[type = "time"]{
  border-radius: 10px;
  display: block;
  width:max-content;
  padding: 0;
  border: 0;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5em;
  color: black;
  background-color:rgb(217, 216, 216);
  margin-top: 20px;
}

.wake-up-hour.display{
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