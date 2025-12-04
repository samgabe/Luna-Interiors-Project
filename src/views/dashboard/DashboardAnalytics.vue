<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Analytics</h1>
      <p class="text-gray-600">Monitor your platform's performance and insights</p>
    </div>

    <!-- Loading State -->
    <div v-if="dashboard.loading" class="flex items-center justify-center py-12">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p class="text-gray-500">Loading analytics...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="dashboard.error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
        </svg>
        <span class="text-red-700">{{ dashboard.error }}</span>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else>
      <!-- Key Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Total Contacts Card -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="shrink-0 p-3 bg-blue-100 rounded-lg">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <span class="text-sm font-medium text-green-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
                </svg>
                +12%
              </span>
            </div>
            <h2 class="text-sm font-medium text-gray-600 uppercase tracking-wider">Total Contacts</h2>
            <p class="text-4xl font-bold text-gray-900 mt-2">{{ formatNumber(dashboard.analytics.totalContacts) }}</p>
            <p class="text-sm text-gray-500 mt-2">All time submissions</p>
          </div>
        </div>

        <!-- New Messages Today Card -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="shrink-0 p-3 bg-green-100 rounded-lg">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                </svg>
              </div>
              <span class="text-sm font-medium text-green-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
                </svg>
                +8%
              </span>
            </div>
            <h2 class="text-sm font-medium text-gray-600 uppercase tracking-wider">New Messages Today</h2>
            <p class="text-4xl font-bold text-gray-900 mt-2">{{ formatNumber(dashboard?.analytics?.recentContacts?.length) }}</p>
            <p class="text-sm text-gray-500 mt-2">Messages received today</p>
          </div>
        </div>

        <!-- Total Users Card -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="shrink-0 p-3 bg-purple-100 rounded-lg">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <span class="text-sm font-medium text-green-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
                </svg>
                +15%
              </span>
            </div>
            <h2 class="text-sm font-medium text-gray-600 uppercase tracking-wider">Total Users</h2>
            <p class="text-4xl font-bold text-gray-900 mt-2">{{ formatNumber(dashboard.analytics.totalUsers) }}</p>
            <p class="text-sm text-gray-500 mt-2">Registered accounts</p>
          </div>
        </div>
      </div>

      <!-- Weekly Contact Trends -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-bold text-gray-900">Weekly Contact Trends</h2>
              <p class="text-sm text-gray-500 mt-1">Daily contact submissions over the past week</p>
            </div>
            <div class="shrink-0 p-3 bg-blue-50 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="p-6">
          <div v-if="dashboard?.analytics?.recentContacts && dashboard?.analytics?.recentContacts?.length">
            <!-- Visual Bar Chart -->
            <div class="space-y-4 mb-6">
              <div v-for="day in dashboard.analytics.recentContacts" :key="day.date" class="flex items-center">
                <div class="w-32 shrink-0">
                  <span class="text-sm font-medium text-gray-700">{{ formatDate(day.date) }}</span>
                </div>
                <div class="flex-1 flex items-center">
                  <div class="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div 
                      class="bg-linear-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end px-3 transition-all duration-500"
                      :style="{ width: getBarWidth(day.count) }"
                    >
                      <span class="text-xs font-semibold text-white">{{ day.count }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Summary Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div class="text-center">
                <p class="text-sm text-gray-500 mb-1">Average Daily</p>
                <p class="text-2xl font-bold text-gray-900">{{ calculateAverage() }}</p>
              </div>
              <div class="text-center">
                <p class="text-sm text-gray-500 mb-1">Peak Day</p>
                <p class="text-2xl font-bold text-gray-900">{{ getPeakCount() }}</p>
              </div>
              <div class="text-center">
                <p class="text-sm text-gray-500 mb-1">Total Week</p>
                <p class="text-2xl font-bold text-gray-900">{{ getTotalWeek() }}</p>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
            </svg>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No weekly data available</h3>
            <p class="text-gray-500">Contact trends will appear here once data is collected.</p>
          </div>
        </div>
      </div>

      <!-- Additional Insights -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Response Rate Card -->
        <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Response Rate</h3>
            <div class="p-2 bg-yellow-100 rounded-lg">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <p class="text-4xl font-bold text-gray-900">87%</p>
              <p class="text-sm text-gray-500 mt-1">Within 24 hours</p>
            </div>
            <div class="text-right">
              <span class="text-sm font-medium text-green-600">+5%</span>
              <p class="text-xs text-gray-500">vs last week</p>
            </div>
          </div>
        </div>

        <!-- Satisfaction Score Card -->
        <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Satisfaction Score</h3>
            <div class="p-2 bg-pink-100 rounded-lg">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <p class="text-4xl font-bold text-gray-900">4.8/5</p>
              <p class="text-sm text-gray-500 mt-1">Average rating</p>
            </div>
            <div class="text-right">
              <span class="text-sm font-medium text-green-600">+0.3</span>
              <p class="text-xs text-gray-500">vs last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useDashboardStore } from "@/stores/dashboard";

const dashboard = useDashboardStore();

// Helper function to format numbers with commas
const formatNumber = (num) => {
  if (num === null || num === undefined) return "0";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Helper function to format dates
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

// Calculate bar width percentage based on max value
const getBarWidth = (count) => {
  const recentContacts = dashboard.analytics.recentContacts || [];
  if (!recentContacts.length) return "0%";
  
  const maxCount = Math.max(...recentContacts.map(d => d.count));
  if (maxCount === 0) return "0%";
  
  const percentage = (count / maxCount) * 100;
  return `${Math.max(percentage, 10)}%`; // Minimum 10% for visibility
};

// Calculate average daily contacts
const calculateAverage = () => {
  const recentContacts = dashboard.analytics.recentContacts || [];
  if (!recentContacts.length) return 0;
  
  const total = recentContacts.reduce((sum, day) => sum + day.count, 0);
  return Math.round(total / recentContacts.length);
};

// Get peak day count
const getPeakCount = () => {
  const recentContacts = dashboard.analytics.recentContacts || [];
  if (!recentContacts.length) return 0;
  
  return Math.max(...recentContacts.map(d => d.count));
};

// Get total week count
const getTotalWeek = () => {
  const recentContacts = dashboard.analytics.recentContacts || [];
  if (!recentContacts.length) return 0;
  
  return recentContacts.reduce((sum, day) => sum + day.count, 0);
};

// Fetch analytics data on component mount
onMounted(() => {
  dashboard.fetchAnalytics();
});
</script>