<template>
<h1>Create an account</h1>
<p><input type="text" placeholder="Email" v-model="email"></p>
<p><input type="password" placeholder="Password" v-model="password"></p>
<p><button @click="register">Submit</button></p>
</template>



<script setup>

import { ref } from "vue";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router"
const email = ref("")
const password = ref("")
const router = useRouter()
const register = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((data) => {
        console.log("Sucessfully registered")
        router.push("/feed")
    })
    .catch(error => {
        console.log(error.code)
        alert(error.message);
    });
}


</script>