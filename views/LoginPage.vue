<template>
    <div class="w-full min-h-screen bg-gradient-to-r from-red-300 to-purple-500 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold text-white">Welcome.</h2>
        
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
        <button @click="submitTo" class="w-full inline-flex items-center justify-center px-4 py-2 bg-purple-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-purple-800 active:bg-purple-400 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Login</button>
      </div>
      <div class="mt-6 text-center">
       <router-link :to="{name: 'RegisterPage'}" >You haven't account yet -></router-link> 
      
    </div>
    
  </div>
</div>
</template>

<script setup>
import {ref,inject} from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex";
const appAxios = inject("appAxios")
const router = useRouter()
const store = useStore()

const infoData = ref({
  email: null,
  password: null
})

const userinfo = ref({})



const submitTo = () => {
  appAxios.post("/api/auth/login", infoData.value).then((res) => {
    // console.log(res.data.user)
    if(res.status === 200){
      localStorage.setItem("token", res.data.accesToken)
      userinfo.value = res.data.user
      store.commit("setToken",userinfo.value)
      console.log(store.getters.getToken);
      router.push({name: "HomePage"})
    }
    
  }).catch(err => alert("Username or password wrong!"))
}
</script>

<style>

</style>