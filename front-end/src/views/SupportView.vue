<script>
import { collection, addDoc } from 'firebase/firestore'; // Import collection and addDoc
import NavBar from "@/components/NavBar.vue";
import projectFirestore from "../firebase/config";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      email: '',
      message: '',
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      let userMessage = {
        email: this.email,
        message: this.message
      };

      const userMessagesCollection = collection(projectFirestore, 'userMessages');

      addDoc(userMessagesCollection, userMessage)
        .then(() => {
          this.successMessage = 'Message sent successfully!';
          console.log('Success message:', this.successMessage);
          
          this.email = '';
          this.message = '';
          setTimeout(() => {
            this.successMessage = ''; 
            console.log('Success message cleared');
          }, 5000);
        })
        .catch(error => {
          this.errorMessage = 'Error sending message: ' + error.message;
          console.log('Error message:', this.errorMessage);
          setTimeout(() => {
            this.errorMessage = ''; 
            console.log('Error message cleared');
          }, 5000);
        });
    }
  }
};
</script>


<template>
  <div>
    <NavBar/>
    <main>
      <div class="shape-container">
        <div class="shape">
          <div class="text-container-top">
            <h2>Support</h2>
            <div class="lower-text">
              <p>If you have a question or need help, contact us!</p>
            </div>
          </div>
          <form class="form-container" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email">
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" rows="5" v-model="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  main 
  {
    background-image: url("../assets/photos/sky.jpg");
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .success-message 
  {
    color: white;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    margin-top:-3em;
  }

  .error-message 
  {
    color: red;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    margin-top:-3em;
  }
  


  .shape-container 
  {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    position: relative;
    padding-top: 2.5em;
    padding-bottom: 1em;
  }

  .shape 
  {
    height: 600px;
    width: 500px;
    border-radius: 10%;
    background-color: #000;
    opacity: 0.8;
    position: relative;
    font-size: 0.7em;
  }

  .text-container-top 
  {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
    font-size: 0.4em;
  }

  .text-container-top h2 
  {
    margin: 0;
    padding: 30px;
    color: white;
    font-size: 30px;
    font-weight: normal;
    letter-spacing: 0.5em;
  }

  .lower-text 
  {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 100%;
    text-align: center;
    z-index: 2;
  }

  .lower-text p 
  {
    margin: 0;
    font-size: 3em;
    color: white;
  }

  .form-container 
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .form-group 
  {
    margin-top: 6em;
  }

  label {
    color: white;
  }

  input[type="email"],
  textarea 
  {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 1;
  }

  button[type="submit"] 
  {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #1C1E30;
    color: white;
    cursor: pointer;
  }
  
</style>