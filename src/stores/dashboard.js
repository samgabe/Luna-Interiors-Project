import { defineStore } from "pinia";
import api from "@/axios";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    contacts: [],
    users: [],
    analytics: {
      totalContacts: 0,
      totalUsers: 0,
      newMessagesToday: 0,
      pendingContacts: 0,
      resolvedToday: 0,
      weeklyContacts: [],
      contactsByService: {},
      contactsByStatus: {},
    },
    profile: { name: "", email: "" },
    preferences: { darkMode: false },
    loading: false,
    error: null,
  }),

  actions: {
    // -----------------------------
    // Contacts
    // -----------------------------
    async fetchContacts() {
      this.loading = true;
      this.error = null;
      try {
        const res = await api.get("/contacts/");  // ✅ Matches backend prefix
        this.contacts = res.data;
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to fetch contacts.";
        console.error("Fetch contacts error:", err);
      } finally {
        this.loading = false;
      }
    },

    async updateContactStatus(contactId, status) {
      this.loading = true;
      this.error = null;
      try {
        const res = await api.patch(`/contacts/${contactId}`, { status });
        // Update local state
        const index = this.contacts.findIndex(c => c.id === contactId);
        if (index !== -1) {
          this.contacts[index] = res.data;
        }
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to update contact.";
        console.error("Update contact error:", err);
      } finally {
        this.loading = false;
      }
    },

    async deleteContact(contactId) {
      this.loading = true;
      this.error = null;
      try {
        await api.delete(`/contacts/${contactId}`);
        // Remove from local state
        this.contacts = this.contacts.filter(c => c.id !== contactId);
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to delete contact.";
        console.error("Delete contact error:", err);
      } finally {
        this.loading = false;
      }
    },

    // -----------------------------
    // Users
    // -----------------------------
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      try {
        const res = await api.get("/users/");  // ✅ Matches backend prefix
        this.users = res.data;
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to fetch users.";
        console.error("Fetch users error:", err);
      } finally {
        this.loading = false;
      }
    },

    async deleteUser(userId) {
      this.loading = true;
      this.error = null;
      try {
        await api.delete(`/users/${userId}`);
        // Remove from local state
        this.users = this.users.filter(u => u.id !== userId);
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to delete user.";
        console.error("Delete user error:", err);
      } finally {
        this.loading = false;
      }
    },

    // -----------------------------
    // Analytics
    // -----------------------------
    async fetchAnalytics() {
      this.loading = true;
      this.error = null;
      try {
        const res = await api.get("/analytics/overview");  // ✅ Matches backend route
        this.analytics = res.data;
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to fetch analytics.";
        console.error("Fetch analytics error:", err);
      } finally {
        this.loading = false;
      }
    },

    // -----------------------------
    // Settings / Profile
    // -----------------------------
    async fetchSettings() {
      this.loading = true;
      this.error = null;
      try {
        const [profileRes, prefRes] = await Promise.all([
          api.get("/settings/profile"),       // ✅ Matches backend prefix
          api.get("/settings/preferences"),   // ✅ Matches backend prefix
        ]);
        console.log(profileRes.data)
        this.profile = profileRes.data;
        this.preferences = prefRes.data;
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to fetch settings.";
        console.error("Fetch settings error:", err);
      } finally {
        this.loading = false;
      }
    },

    async saveProfile() {
      this.loading = true;
      this.error = null;
 
      try {
        const res = await api.put("/settings/profile", this.profile);
        this.profile = res.data;
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to update profile.";
        console.error("Save profile error:", err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async updatePassword(payload) {
      this.loading = true;
      this.error = null;
      try {
        await api.put("/settings/password", payload);
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to update password.";
        console.error("Update password error:", err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async savePreferences(preferencesData) {
      this.loading = true;
      this.error = null;
      try {
        const res = await api.put("/settings/preferences", preferencesData);
        this.preferences = res.data;
      } catch (err) {
        this.error = err.response?.data?.detail || "Failed to save preferences.";
        console.error("Save preferences error:", err);
        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
});