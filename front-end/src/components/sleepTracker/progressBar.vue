<template>
    <div class="progress-bar container-item">
        <p id="progress-bar-text">You will get 
        <span id="progress-hour">10</span>hours <span id="progress-minutes">10</span>minutes of sleep</p>
        <div id="progress-bar"></div>
    </div>
</template>
<style scoped>

.progress-bar.container-item{
        justify-content: center;
        align-items: center;
        padding: 30px;
        margin: 30px
    }
    #progress-bar-text{
        text-align:center;
    }

    #progress-bar{
        align-items: center;
        width: auto;
        height: auto;
    }
    </style>