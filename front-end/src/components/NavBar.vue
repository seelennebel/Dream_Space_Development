<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
      <div class="navig">
        <RouterLink to="/">DREAM SPACE</RouterLink>
        <RouterLink to="/cycle-main">SLEEP CYCLE</RouterLink>
        <RouterLink to="/sleeptracker">SLEEP TRACKER</RouterLink>
        <RouterLink to="/articles">ARTICLES</RouterLink>
        <RouterLink to="/support">SUPPORT</RouterLink>
        <RouterLink to="/signup">LOGIN</RouterLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  .navig
  {
    height: 50px;
    width: 100%; 
    background-color: #000;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
  }
  
  .navig a 
  {
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    padding: 0 20px; 
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .navig a:hover 
  {
    background-color: #ddd;
    color: black;
  }
  
  
  @media screen and (max-width: 768px) 
  {
    .navig a 
    {
      font-size: 14px; 
      padding: 0 10px; 
    }
  }
  </style>
  