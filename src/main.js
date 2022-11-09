import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { getFirestore } from "firebase/firestore"
import { collectionGroup, collection, getDocs, addDoc, doc , setDoc } from "firebase/firestore";
import { query, where, limit , orderBy } from "firebase/firestore"



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

var database = getFirestore();



// example data

var citiesRef = collection(database, "users")

await setDoc(doc(citiesRef, "SF"), {
  name: "San Francisco", state: "CA", country: "USA",
  capital: false, population: 860000,
  regions:["west_coast", "norcal"]
})

await setDoc(doc(citiesRef,"WA"), {
  name: "Wattala", state : "WA", country: "Srilanka",
  capital: false, population: 100000,
  regions: ["elakanda", "hendala"]
})


var citiesRef = collection(database, "users")

// create a query against the collection

// collection group queries
var animalsRef = collection(database, "animals")

await Promise.all([
  addDoc(collection(animalsRef, "SF","landmarks"), {
    name: "Golden gate bridge",
    type: "bridge"
  }),

  addDoc(collection(animalsRef,"SF", "landmarks"), {
    name: "Legion of honor",
    type: "museum"
  }),
  addDoc(collection(animalsRef, "TX", "new site"), {
    name: "legion of honor",
    type: "tower"
  })
])


// var museums = query(collectionGroup(database, "landmarks"), where("type", "==", "museum"))
// var querySnapshot = await getDocs(museums)
// querySnapshot.forEach((doc)=> {
//   console.log(doc.id, '=>', doc.data())
// })








app.use(router);

app.mount("#app");
