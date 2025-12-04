import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

// Layouts 
import PublicLayout from '@/layouts/PublicLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

// New Pages
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import DashboardContacts from '../views/dashboard/DashboardContacts.vue'
import DashboardHome from '../views/dashboard/DashboardHome.vue'
import DashboardUsers from '@/views/dashboard/DashboardUsers.vue' 
import Analytics from '@/views/dashboard/DashboardAnalytics.vue'
import Settings from '@/views/dashboard/DashboardSettings.vue'

import { useAuthStore } from '@/stores/auth'



const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'portfolio', name: 'Portfolio', component: Portfolio },
      { path: 'services', name: 'Services', component: Services },
      { path: 'about', name: 'About', component: About },
      { path: 'contact', name: 'Contact', component: Contact }
    ]
  },
{
  path: '/dashboard',
  component: DashboardLayout, // Layout + sidebar
  meta: { requiresAuth: true },
  children: [
    { path: '', name: 'DashboardHome', component: DashboardHome },
    { path: 'contacts', name: 'DashboardContacts', component: DashboardContacts },
    { path: 'users', name: 'DashboardUsers', component: DashboardUsers },
    { path: 'analytics', name: 'Analytics', component: Analytics },
    { path: 'settings', name: 'Settings', component: Settings }
  ]
},
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})


// Navigation Guard
router.beforeEach((to, from) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { path: '/login' };
  }

  return true;
});


export default router