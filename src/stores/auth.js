import { defineStore } from "pinia";
import axios from "axios";
const authBaseURL = import.meta.env.VITE_AUTH_API

// Set global auth header
const setAuthHeader = (token) => {
axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
};

export const useAuthStore = defineStore("auth", {
state: () => ({
user: null,
token: localStorage.getItem("token") || null,
loading: false,
error: null,
}),

getters: {
isAuthenticated: (state) => !!state.token,
},

actions: {
async login(email, password) {
this.loading = true;
this.error = null;
const body = {
  email,
  password
} 

  try {
    const res = await axios.post(`${authBaseURL}/auth/login`, body);

    this.token = res.data.token;
    localStorage.setItem("token", this.token);
    setAuthHeader(this.token);

    await this.getProfile();
    return true;
  } catch (err) {
    this.error = err.response?.data?.message || "Login failed.";
    return false;
  } finally {
    this.loading = false;
  }
},

async signup(formData) {
  this.loading = true;
  this.error = null;

  try {
    const res = await axios.post(`${authBaseURL}/auth/signup`, formData);

    this.token = res.data.token;
    localStorage.setItem("token", this.token);
    setAuthHeader(this.token);

    await this.getProfile();
    return true;
  } catch (err) {
    this.error = err.response?.data?.message || "Signup failed.";
    return false;
  } finally {
    this.loading = false;
  }
},

async getProfile() {
  if (!this.token) return;

  try {
    const res = await axios.get(`${authBaseURL}/auth/me`);
    this.user = res.data;
  } catch (err) {
    console.error("Profile fetch failed:", err);
    this.logout(); // remove invalid token
  }
},

logout() {
  this.user = null;
  this.token = null;
  localStorage.removeItem("token");
  setAuthHeader(null);
},

// Call this on app start to restore session
async initialize() {
  if (this.token) {
    setAuthHeader(this.token);
    await this.getProfile();
  }
},

},
});
