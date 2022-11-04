<template>

<div>
  <nav>
    <router-link to="/"> Home</router-link> |
    <router-link to="/feed">Feed</router-link> |
    <span v-if="isLoggedIn">
      <button @click="signOut">Logout</button>
      <router-link to="/feed">Feed</router-link>
    </span>

    <span v-else>
    <router-link to="/register">Register</router-link> |
    <router-link to="/sign-in">Log In</router-link> |
    </span>
  </nav>
  <router-view></router-view>
</div>
  
</template>


<script setup>
import { ref, watchEffect } from "vue"
import firebase from "firebase/compat/app"
import { useRouter } from 'vue-router'
import "firebase/compat/firestore";
import "firebase/compat/auth";

const router = useRouter()
const isLoggedIn = ref(true)

// runs after firebase is initialized

firebase.auth().onAuthStateChanged(function (user) {
  if(user) {
    isLoggedIn.value = true
  }
  else {
    isLoggedIn.value = false
  }
})
const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
}

</script>



<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osz-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>