<template>
  <div id="app" class="min-h-screen bg-slate-50">
    <!-- Navigation -->
    <nav class="bg-slate-900 text-white shadow-lg sticky top-0 z-50 opacity-100">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-2xl font-bold tracking-wider">
            <span class="text-slate-100">LUNA</span>
            <span class="text-slate-400 ml-2">INTERIORS</span>
          </router-link>
          
          <div class="hidden md:flex space-x-8">
            <router-link 
              to="/" 
              class="hover:text-slate-300 transition-colors duration-200"
              active-class="text-slate-300 border-b-2 border-slate-300"
            >
              Home
            </router-link>
            <router-link 
              to="/portfolio" 
              class="hover:text-slate-300 transition-colors duration-200"
              active-class="text-slate-300 border-b-2 border-slate-300"
            >
              Portfolio
            </router-link>
            <router-link 
              to="/services" 
              class="hover:text-slate-300 transition-colors duration-200"
              active-class="text-slate-300 border-b-2 border-slate-300"
            >
              Services
            </router-link>
            <router-link 
              to="/about" 
              class="hover:text-slate-300 transition-colors duration-200"
              active-class="text-slate-300 border-b-2 border-slate-300"
            >
              About
            </router-link>
            <router-link 
              to="/contact" 
              class="hover:text-slate-300 transition-colors duration-200"
              active-class="text-slate-300 border-b-2 border-slate-300"
            >
              Contact
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
          <router-link to="/" class="block py-2 hover:text-slate-300" @click="mobileMenuOpen = false">Home</router-link>
          <router-link to="/portfolio" class="block py-2 hover:text-slate-300" @click="mobileMenuOpen = false">Portfolio</router-link>
          <router-link to="/services" class="block py-2 hover:text-slate-300" @click="mobileMenuOpen = false">Services</router-link>
          <router-link to="/about" class="block py-2 hover:text-slate-300" @click="mobileMenuOpen = false">About</router-link>
          <router-link to="/contact" class="block py-2 hover:text-slate-300" @click="mobileMenuOpen = false">Contact</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-300 mt-20">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold text-white mb-4">LUNA INTERIORS</h3>
            <p class="text-sm">Creating celestial spaces that inspire and illuminate your everyday life.</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><router-link to="/portfolio" class="hover:text-white transition-colors">Portfolio</router-link></li>
              <li><router-link to="/services" class="hover:text-white transition-colors">Services</router-link></li>
              <li><router-link to="/about" class="hover:text-white transition-colors">About Us</router-link></li>
              <li><router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul class="space-y-2 text-sm">
              <li>Email: info@lunainteriors.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Hours: Mon-Fri 9AM-6PM</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Luna Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  }
}
</script>
