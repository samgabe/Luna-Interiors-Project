<template>  
  <div class="flex justify-center items-center h-screen bg-gray-100 px-4">  
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">  
      <h2 class="text-3xl font-bold text-center mb-6">Login</h2>  


        <form @submit.prevent="handleLogin">  
            <div class="mb-4">  
            <label for="email">Email</label>  
            <input  
                id="email"  
                v-model="email"  
                type="email"  
                required  
                class="w-full border p-3 rounded"  
                @input="auth.error = null"  
            />  
            </div>  

            <div class="mb-4">  
            <label for="password">Password</label>  
            <input  
                id="password"  
                v-model="password"  
                type="password"  
                required  
                class="w-full border p-3 rounded"  
                @input="auth.error = null"  
                autocomplete=""
            />  
            </div>  

            <p v-if="auth.error" class="text-red-500 text-sm mb-3">  
            {{ auth.error }}  
            </p>  

            <button  
            type="submit"  
            class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"  
            :disabled="auth.loading"  
            >  
            <span v-if="!auth.loading">Login</span>  
            <span v-else>Loading...</span>  
            </button>  
        </form>  

        <p class="text-center mt-4">  
            Don't have an account?  
            <router-link to="/signup" class="text-blue-600 underline">Sign up</router-link>  
        </p>  
        </div>  

  </div>  
</template>  

<script setup>  
import { ref } from "vue";  
import { useAuthStore } from "@/stores/auth";  
import { useRouter } from "vue-router";  

const email = ref("");  
const password = ref("");  
const router = useRouter();  
const auth = useAuthStore();  

const handleLogin = async () => {  
  const success = await auth.login(email.value.trim(), password.value);  
  if (success) router.push("/dashboard");  
};  
</script>  
