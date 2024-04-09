<script>
</script>
<template>
    <div class="bedtime-notification">
        <button type="button" class="notify-bedtime button">
            <div class="notify-bedtime container-item">
                <div id="ring-sign">

                </div>
                <div id="notify-bedtime text">Notify bedtime</div>
                <div id="placeholder">
                    <span class="time-placeholder">10</span>
                    <span class="unit-placeholder">hours</span>
                    <span id="beforesleep-text">Before sleep</span>
                </div>
                <div id="nav-sign">

    
                </div>
            </div>
        </button>
        <div class="bedTime container-item">
            <div id="bed-sign">
                <i class="fa-solid fa-bed"></i>
            </div>
            <div id="Bedtime text">
                <span id="bedtime-text">Bed time</span>
            </div>
            <div id="hours-text">
                <span id="hours-text">10</span>
                <span id="am-pm-text">pm</span>
            </div>
            <div id="toggle-button">
                <label class="switch">
                    <input title="switch" type="checkbox" id="toggle-switch">
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    </div>  
</template>
<style scoped>

    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 400px;
        text-align: center;
    }

    .bedtime-notification{
        padding: 20px;
        margin: 10px;
    }
    .button{
        background-color: var(--container-backrgroundcolor);
        width: max-content;
        border-radius: 10px;
    }

    select[for = "sleep"]
    {
        padding: 0;
        border: 0;
        font-family: "Roboto Mono", monospace;
        font-size: 1.5em;
        color: var(--text-color);
        background-color: rgba(0,0,0,0);
    }
    .ring-sign{
        align-items: flex-start;
    }
    .notify-bedtime.container-item{
        display: flex;
        flex-direction: row;
        width: auto;
        height: 100%;
        background-color: var(--container-backrgroundcolor);
        padding: 30px;
        margin: 10px;
        align-items: flex-start;
    }

    #placeholder{
        color:#bdbaba;
        align-items: flex-end;
    }
    .nav-sign{
        align-items: flex-end;
    }
    i{
        width: 50px;
        width: 20px;
        color: #bdbaba;
    }

    .bedTime.container-item{
        display: flex;
        border-radius: 10px;
        flex-direction: column;
        width: auto;
        height: 100%;
        background-color: var(--container-backrgroundcolor);
        padding: 30px 30px 15px 15px;
        margin: 10px;
        align-items: flex-start;
    }
    .toggle-container {
        display: flex;
        align-items: center;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 17px;
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 13px;
        width: 13px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: var(--background-color);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #007bff;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(13px);
        -ms-transform: translateX(13px);
        transform: translateX(13px);
    }

</style>