<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Settings</h1>

    <div v-if="dashboard.loading" class="text-gray-500">Loading settings...</div>
    <div v-else>
      <div v-if="dashboard.error" class="text-red-500 mb-4">{{ dashboard.error }}</div>

      <!-- Profile Settings -->
      <div class="bg-white shadow rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Profile</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-1 font-medium">Name</label>
            <input v-model="dashboard.profile.name" type="text" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Email</label>
            <input v-model="dashboard.profile.email" type="email" class="w-full p-2 border rounded" />
          </div>
        </div>
        <button @click="dashboard.saveProfile" class="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </div>

      <!-- Password Settings -->
      <div class="bg-white shadow rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Change Password</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block mb-1 font-medium">Current Password</label>
            <input type="password" v-model="password.current" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block mb-1 font-medium">New Password</label>
            <input type="password" v-model="password.new" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Confirm Password</label>
            <input type="password" v-model="password.confirm" class="w-full p-2 border rounded" />
          </div>
        </div>
        <button @click="updatePassword" class="mt-6 bg-green-600 text-white px-4 py-2 rounded">
          Update Password
        </button>
      </div>

      <!-- Preferences -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Preferences</h2>
        <div class="flex items-center gap-4">
          <label class="font-medium">Dark Mode</label>
          <input type="checkbox" v-model="dashboard.preferences.darkMode" />
        </div>
        <button @click="dashboard.savePreferences" class="mt-6 bg-gray-800 text-white px-4 py-2 rounded">
          Save Preferences
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDashboardStore } from "@/stores/dashboard";

const dashboard = useDashboardStore();
const password = ref({ current: "", new: "", confirm: "" });

const updatePassword = async () => {
  if (password.value.new !== password.value.confirm) {
    alert("New password and confirm password do not match!");
    return;
  }

  await dashboard.updatePassword(password.value);
  alert("Password updated!");
  password.value = { current: "", new: "", confirm: "" };
};

onMounted(() => {
  dashboard.fetchSettings();
});
</script>
