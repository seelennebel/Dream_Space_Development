<template>
    <div>
        <NavBar/>
      </div>
    <main>
      <div class="full_size_img">
        <div class="shape-container">
          <form @submit.prevent = "handle_submit">
            <div class="shape">
              <div class="text-container-top">
                <h2>LOGIN</h2>
              </div>
              <div id = "upper" class="email-shape-container">
                <div class="email-shape">
                  <input type="text" placeholder="Enter your username" name = "username" required> 
                </div>
              </div>
              <div id = "lower" class="email-shape-container">
                <div class="email-shape">
                  <input type="password" placeholder = "Enter your password" name = "user_password" required> 
                </div>
              </div>
              <p> {{ user_error }} </p>
              <button type = "submit" class = "account" id = "bu">Submit</button>
              <RouterLink to = "/signup_page" class="account">Don't have an account? SIGN UP</RouterLink>
            </div>
          </form>
        </div>
      </div>
    </main>
</template>

<script setup>

import NavBar from "/src/components/NavBar.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";

const user_error = ref("");

const change_location = () => {
  location.assign("/");
};

const handle_submit = (event) => {
    event.preventDefault();
    const form_data = new FormData(event.target);
    const usr = form_data.get("username");
    const usr_password = form_data.get("user_password");

    let url = 'http://localhost:8000/login';

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:8000"
      },
      body: JSON.stringify({"username": usr ,"user_password": usr_password})
    };

    let status = 0;

    fetch(url, options)
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(json => {
        if(status === 201) {
          user_error.value = "SUCCESS!";
          console.log(json);
          document.cookie = `jwt=${json.token}; Max-Age=86400;`;
          setTimeout(change_location, 2000);
        }
        else if(status === 400) {
          user_error.value = "Invalid data";
        }
        else if(status === 404) {
          user_error.value = "Invalid data";
        }
      })
      .catch(err => console.log('error:' + err));
};

</script>

<style scoped>

  p
  {
    font-size: 0.8em;
  }

  #bu
  {
    font-size: 1em;
    margin-bottom: 1em;
  }

  input
  {
    background-color: transparent;
    border: 0;
    font-size: 1.5em;
    margin-left: 0.5em;
    color: white;
  }

  #lower
  {
    padding-bottom: 1em;
  }

  #upper
  {
    padding-top: 5em;
  }

  main {
    background-image: url("../assets/photos/sky.jpg");
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
  }
  
  .shape-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    position: relative;
    padding-top: 5em;
    padding-bottom: 5em;
  }
  
  .shape {
    height: 600px;
    width: 500px;
    border-radius: 10%;
    background-color: #000;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  
  .text-container-top {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
  }
  
  .text-container-top h2 {
    margin: 0;
    padding: 10px;
    color: white;
    font-weight: normal;
    letter-spacing: 0.5em;
  }
  
  .email-shape-container {
    text-align: center;
    z-index: 2;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .email-shape {
    height: 100px;
    width: 450px;
    border-radius: 20px;
    background-color: #121016;
    opacity: 0.8;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .email-shape i {
    color: white;
    font-size: 50px;
    margin-left:25px;
  }
  
  .account {
    border: none;
    background-color: inherit;
    cursor: pointer;
    color: white;
    font-family: 'Roboto Mono';
    letter-spacing: 0.1em;
    margin-bottom: 3em;
    font-size: 0.8em;
  }
  
  .account:hover {
    background-color: #1C1E30;
    color: white;
  }
  </style>