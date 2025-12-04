<template>  
  <div class="flex justify-center items-center h-screen bg-gray-50 px-4">  
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">  
      <h2 class="text-3xl font-bold text-center mb-6">Create Account</h2>  


        <form @submit.prevent="handleSignup">  
            <div class="mb-4">  
            <label for="name">Full Name</label>  
            <input  
                id="name"  
                v-model="name"  
                type="text"  
                required  
                class="w-full p-3 border rounded"  
                @input="auth.error = null"  
            />  
            </div>  

            <div class="mb-4">  
            <label for="email">Email</label>  
            <input  
                id="email"  
                v-model="email"  
                type="email"  
                required  
                class="w-full p-3 border rounded"  
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
                class="w-full p-3 border rounded"  
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
            <span v-if="!auth.loading">Sign Up</span>  
            <span v-else>Loading...</span>  
            </button>  
        </form>  

        <p class="text-center mt-4">  
            Already have an account?  
            <router-link to="/login" class="text-blue-600 underline">Login</router-link>  
        </p>  
        </div>  


  </div>  
</template>  

<script setup>  
import { ref } from "vue";  
import { useAuthStore } from "@/stores/auth";  
import { useRouter } from "vue-router";  

const name = ref("");  
const email = ref("");  
const password = ref("");  
const router = useRouter();  
const auth = useAuthStore();  

const handleSignup = async () => {  
  const success = await auth.signup({  
    name: name.value.trim(),  
    email: email.value.trim(),  
    password: password.value,  
  });  

  if (success) router.push("/dashboard");  
};  
</script>  
