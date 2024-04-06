<template>
    <div class="cards-container">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <a :href="card.link" class="content">
          <p class="main-text">{{ card.text }}</p>
          <p class="date">{{ card.date }}</p>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cards = ref([
    { text: 'Good Sleep for Good Health. Get the Rest You Need.', date: 'April 2021', link: 'https://newsinhealth.nih.gov/2021/04/good-sleep-good-health' },
    { text: 'Why Do We Need Sleep?', date: 'December 8, 2023', link:"https://www.sleepfoundation.org/how-sleep-works/why-do-we-need-sleep" },
    { text: 'A short history of insomnia and how we became obsessed with sleep', date: 'October 9, 2023', link:"https://theconversation.com/a-short-history-of-insomnia-and-how-we-became-obsessed-with-sleep-211729" },
    { text: 'What Is Circadian Rhythm?', date: 'March 15, 2024', link:"https://www.sleepfoundation.org/circadian-rhythm" },
    { text: '20 Simple Tips That Help You Fall Asleep Quickly', date: 'August 10, 2023', link:"https://www.healthline.com/nutrition/ways-to-fall-asleep#takeaway" },
    { text: 'What Is Sleep Hygiene?', date: 'January 17, 2023', link:"https://www.verywellmind.com/what-is-sleep-hygiene-5085887" },
    { text: 'Sleep Disorders: Causes, Diagnosis, and Treatments', date: 'January 29, 2024', link:"https://www.healthline.com/health/sleep/disorders" },
    { text: 'What does it mean when we dream?', date: 'October 13, 2023', link:"https://www.medicalnewstoday.com/articles/284378" },
  ]);
  </script>
  
  <style scoped>
  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 50px; 
    padding: 20px;
    opacity:0.8;
  }
  
  .card {
    background-color: #000;
    border-radius: 15px;
    overflow: hidden;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px; 
    padding: 20px;
  }
  
  .main-text {
    color: white;
    margin: 0;
  }
  
  .date {
    color: white;
    margin: 0;
    align-self: flex-end; 
  }
  .content a {
    text-decoration: none;
    color: inherit; /* Inherit the color from its parent */
  }
  
  .content a:hover {
    text-decoration: underline;
  }
  </style>
  