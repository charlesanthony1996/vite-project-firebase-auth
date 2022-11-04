import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";





var firebaseConfig = {

    apiKey: "AIzaSyCCbLKyEsJjKrxDbAPNW_dO341ph1T7-iI",
  
    authDomain: "vue-firebase-automation-d374e.firebaseapp.com",
  
    projectId: "vue-firebase-automation-d374e",
  
    storageBucket: "vue-firebase-automation-d374e.appspot.com",
  
    messagingSenderId: "268727744532",
  
    appId: "1:268727744532:web:09be67565a89d6170b8f01"
  
  };


firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
