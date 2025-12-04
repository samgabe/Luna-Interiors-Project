<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Contact Submissions</h1>
      <p class="text-gray-600">Manage and review customer inquiries</p>
    </div>

    <!-- Loading State -->
    <div v-if="dashboard.loading" class="flex items-center justify-center py-12">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p class="text-gray-500">Loading contacts...</p>
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

    <!-- Empty State -->
    <div v-else-if="!paginatedContacts.length" class="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
      <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-2">No contacts yet</h3>
      <p class="text-gray-500">Contact submissions will appear here once received.</p>
    </div>

    <!-- Table with Data -->
    <div v-else class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Results Summary -->
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <p class="text-sm text-gray-700">
          Showing <span class="font-semibold">{{ startIndex + 1 }}</span> to 
          <span class="font-semibold">{{ Math.min(endIndex, totalContacts) }}</span> of 
          <span class="font-semibold">{{ totalContacts }}</span> contacts
        </p>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Phone</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Service</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Message</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr v-for="item in paginatedContacts" :key="item.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{{ item.name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-700">{{ item.email }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-700">{{ item.phone || '—' }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  {{ item.service }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-700 max-w-xs truncate" :title="item.message">
                  {{ item.message }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Controls -->
      <div class="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div class="flex items-center justify-between">
          <!-- Previous Button -->
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            ]"
          >
            Previous
          </button>

          <!-- Page Numbers -->
          <div class="flex items-center space-x-2">
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                page === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              ]"
            >
              {{ page }}
            </button>
          </div>

          <!-- Next Button -->
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            ]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useDashboardStore } from "@/stores/dashboard";

const dashboard = useDashboardStore();

// Pagination state
const currentPage = ref(1);
const itemsPerPage = ref(10);

// Computed properties for pagination
const totalContacts = computed(() => dashboard.contacts?.length || 0);

const totalPages = computed(() => Math.ceil(totalContacts.value / itemsPerPage.value));

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

const endIndex = computed(() => startIndex.value + itemsPerPage.value);

const paginatedContacts = computed(() => {
  return dashboard.contacts?.slice(startIndex.value, endIndex.value) || [];
});

// Calculate visible page numbers (show max 5 pages)
const visiblePages = computed(() => {
  const pages = [];
  const maxVisible = 5;
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages.value, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

// Pagination methods
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Fetch contacts when component mounts
onMounted(() => {
  dashboard.fetchContacts();
});
</script>