<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Dashboard Overview</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 bg-white shadow rounded-lg">
        <h2 class="text-xl font-semibold">Total Contacts</h2>
        <p class="text-3xl font-bold mt-2">{{ stats.contacts }}</p>
      </div>

      <div class="p-6 bg-white shadow rounded-lg">
        <h2 class="text-xl font-semibold">Total Users</h2>
        <p class="text-3xl font-bold mt-2">{{ stats.users }}</p>
      </div>

      <div class="p-6 bg-white shadow rounded-lg">
        <h2 class="text-xl font-semibold">New Messages Today</h2>
        <p class="text-3xl font-bold mt-2">{{ stats.today }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "@/axios";

const stats = ref({
  contacts: 0,
  users: 0,
  today: 0
});

onMounted(async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_BASE + "/analytics/overview");
    stats.value = res.data;
  } catch (err) {
    console.error("Failed to fetch dashboard stats:", err);
  }
});

</script>
