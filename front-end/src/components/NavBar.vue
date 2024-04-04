<template>
    <div>
      <div class="navig">
        <a href="/">DREAM SPACE</a>
        <a href="circadianrhythms">SLEEP CYCLE</a>
        <a href="sleeptracker">SLEEP TRACKER</a>
        <a href="articles">ARTICLES</a>
        <a href="support">SUPPORT</a>
        <a href="signin">SIGN IN</a>
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
  