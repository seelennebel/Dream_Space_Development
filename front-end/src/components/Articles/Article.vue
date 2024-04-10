<template>
  <div class="cards-container">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <a :href="card.link" class="content">
        <img :src="card.image" alt="Card Image" class="card-image">
        <div class="text-content">
          <p class="main-text">{{ card.text }}</p>
          <p class="date">{{ card.date }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import firstImg from '@/assets/photos/first.jpg';
import secondImg from '@/assets/photos/second.png';
import thirdImg from '@/assets/photos/third.png';
import fourthImg from '@/assets/photos/fourth.webp';
import fifthImg from '@/assets/photos/fifth.webp';
import sixthImg from '@/assets/photos/sixth.webp';
import seventhImg from '@/assets/photos/seventh.jpg';
import eighthImg from '@/assets/photos/eighth.webp';

const cards = ref([
  { text: 'Good Sleep for Good Health. Get the Rest You Need.', 
   date: 'April 2021', 
   link: 'https://newsinhealth.nih.gov/2021/04/good-sleep-good-health', 
   image: firstImg 
  },

  { text: 'Why Do We Need Sleep?',
    date: 'December 8, 2023', 
    link:"https://www.sleepfoundation.org/how-sleep-works/why-do-we-need-sleep",
    image: secondImg 
  },

  { text: 'A short history of insomnia and how we became obsessed with sleep', 
    date: 'October 9, 2023', 
    link:"https://theconversation.com/a-short-history-of-insomnia-and-how-we-became-obsessed-with-sleep-211729",
    image: thirdImg 
  },

  { text: 'What Is Circadian Rhythm?', 
    date: 'March 15, 2024', 
    link:"https://www.sleepfoundation.org/circadian-rhythm",
    image: fourthImg 
  },

  { text: '20 Simple Tips That Help You Fall Asleep Quickly', 
    date: 'August 10, 2023', 
    link:"https://www.healthline.com/nutrition/ways-to-fall-asleep#takeaway",
    image: fifthImg 
  },

  { text: 'What Is Sleep Hygiene?', 
    date: 'January 17, 2023', 
    link:"https://www.verywellmind.com/what-is-sleep-hygiene-5085887",
    image: sixthImg 
  },

  { text: 'Sleep Disorders: Causes, Diagnosis, and Treatments', 
    date: 'January 29, 2024', 
    link:"https://www.healthline.com/health/sleep/disorders",
    image: seventhImg 
  },

  { text: 'What does it mean when we dream?', 
    date: 'October 13, 2023', 
    link:"https://www.medicalnewstoday.com/articles/284378",
    image: eighthImg
  },
]);
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 50px; 
  padding: 20px;
  opacity: 0.8;
  justify-content: center;
}

.card {
  background-color: #000;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.main-text {
  color: white;
  margin: 0;
  font-size: 1.2em;
  text-align: center;
}

.date {
  color: white;
  margin: 0;
  margin-bottom:auto;
  
  font-size: 0.9em;
}

.content a {
  text-decoration: none;
  color: inherit; 
}

.content a:hover {
  text-decoration: underline;
}

.card-image {
  width: 17vw;
  height: 20vh;
  max-height: 300px;
  max-width:300px; 
  object-fit: cover; 
  margin: 0 auto;
}
</style>