import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAu37CfXxOZhe3vIqpa7TmH20K-OSIpxmY",
    authDomain: "sleepweb-daece.firebaseapp.com",
    projectId: "sleepweb-daece",
    storageBucket: "sleepweb-daece.appspot.com",
    messagingSenderId: "1062276526722",
    appId: "1:1062276526722:web:613be6a5ad6b7019293a9b"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const projectFirestore = getFirestore(firebaseApp);


  export default projectFirestore;