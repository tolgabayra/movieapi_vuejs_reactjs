<template>
    <div class="w-full min-h-screen bg-gradient-to-r from-red-300 to-purple-500 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold text-white">Welcome.</h2>
        <div class="mb-4">
        <label class="block mb-1" for="email">Username</label>
        <input v-model="infoData.username" id="username" type="text" name="username" class="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="email">Email-Address</label>
        <input v-model="infoData.email" id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input v-model="infoData.password" id="password" type="password" name="password" class="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
      </div>
      <div class="mt-6">
        <button @click="submit" class="w-full inline-flex items-center justify-center px-4 py-2 bg-purple-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-purple-800 active:bg-purple-400 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Register</button>
      </div>
      <div class="mt-6 text-center">
       <router-link :to="{name: 'HomePage'}" >You have account already -></router-link> 
      
    </div>
    
  </div>
</div>
</template>

<script setup>
import {ref,inject} from "vue"
import { useRouter } from "vue-router"
const appAxios = inject("appAxios")
const router = useRouter()

const infoData = ref({
  username: null,
  email: null,
  password: null
})

const submit = () => {
  appAxios.post("/api/auth/register", infoData.value).then(() => {
    router.push({name: "HomePage"})
  })
}
</script>

<style>

</style>