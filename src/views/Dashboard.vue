<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md p-6">
      <h2 class="text-2xl font-bold mb-6">Admin</h2>

      <ul class="space-y-4">
        <li>
          <router-link to="/dashboard" class="hover:text-blue-600">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/dashboard/contacts" class="hover:text-blue-600">Contact Submissions</router-link>
        </li>
        <li>
          <router-link to="/dashboard/users" class="hover:text-blue-600">Users</router-link>
        </li>
      </ul>

      <button
        @click="logout"
        class="mt-10 bg-red-500 text-white w-full py-2 rounded-lg"
      >
        Logout
      </button>
    </aside>

    <!-- Page Content -->
    <main class="flex-1 p-8 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = useAuthStore();

const logout = () => {
  auth.logout();
  router.push("/login");
};
</script>
