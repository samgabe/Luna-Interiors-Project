<template>
  <div class="flex h-screen bg-slate-100 text-slate-900 font-sans">
    <!-- Sidebar -->
    <aside class="w-64 bg-linear-to-b from-slate-900 via-slate-800 to-slate-700 text-white flex flex-col p-6 shadow-lg">
      <h2 class="text-3xl font-bold mb-8 tracking-wide">LUNA Admin</h2>

      <nav class="flex-1">
        <ul class="space-y-4">
          <li>
            <router-link 
              to="/dashboard" 
              class="block px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              active-class="bg-slate-700 font-semibold"
            >Dashboard</router-link>
          </li>
          <li>
            <router-link 
              to="/dashboard/contacts" 
              class="block px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              active-class="bg-slate-700 font-semibold"
            >Contact Submissions</router-link>
          </li>
          <li>
            <router-link 
              to="/dashboard/users" 
              class="block px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              active-class="bg-slate-700 font-semibold"
            >Users</router-link>
          </li>
          <li>
            <router-link 
              to="/dashboard/analytics" 
              class="block px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              active-class="bg-slate-700 font-semibold"
            >Analytics</router-link>
          </li>
          <li>
            <router-link 
              to="/dashboard/settings" 
              class="block px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              active-class="bg-slate-700 font-semibold"
            >Settings</router-link>
          </li>
        </ul>
      </nav>

      <button
        @click="logout"
        class="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors"
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

<style>
/* Optional: smooth scrollbars for dashboard */
main::-webkit-scrollbar {
  width: 8px;
}
main::-webkit-scrollbar-thumb {
  background-color: rgba(100, 116, 139, 0.5);
  border-radius: 4px;
}
</style>
