<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-linear-to-br from-slate-800 via-slate-700 to-slate-900">
      <div class="absolute inset-0 bg-[url('/LunaInteriors-1.jpg')] bg-cover opacity-40">
      </div>
      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Design Your <span class="text-slate-300">Lunar</span> Space
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-slate-200 max-w-2xl mx-auto">
          Where celestial elegance meets sophisticated interior design
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/portfolio" 
            class="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
          >
            View Our Work
          </router-link>
          <router-link 
            to="/contact" 
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Get Started
          </router-link>
        </div>
      </div>
      <!-- Decorative moon circles -->
      <div class="absolute top-20 right-20 w-32 h-32 bg-slate-400 rounded-full opacity-20 blur-2xl"></div>
      <div class="absolute bottom-32 left-32 w-48 h-48 bg-slate-500 rounded-full opacity-10 blur-3xl"></div>
    </section>

    <!-- Featured Projects -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Featured Spaces</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our latest interior design projects that blend lunar aesthetics with modern luxury
          </p>
        </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                v-for="project in featuredProjects" 
                :key="project.id"
                class="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div class="h-64 overflow-hidden relative">
                  <img 
                    :src="project.image" 
                    :alt="project.title"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-linear-to-br opacity-40 group-hover:opacity-30 transition-opacity duration-300" :class="project.gradient"></div>
                </div>
                <div class="p-6 bg-white">
                  <h3 class="text-xl font-bold text-slate-900 mb-2">{{ project.title }}</h3>
                  <p class="text-slate-600 mb-4">{{ project.description }}</p>
                  <span class="text-slate-800 font-semibold hover:text-slate-600">View Project →</span>
                </div>
              </div>
            </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-20 bg-slate-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p class="text-slate-600 text-lg">Comprehensive interior design solutions tailored to your vision</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="service in services" 
              :key="service.id"
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <component :is="service.icon" class="w-12 h-12 text-slate-700 mb-4" />
              <h3 class="text-xl font-bold text-slate-900 mb-2">{{ service.title }}</h3>
              <p class="text-slate-600">{{ service.description }}</p>
            </div>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/services" 
            class="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300"
          >
            Explore All Services
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-slate-800 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p class="text-slate-300 text-lg">Trusted by homeowners and businesses alike</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="bg-slate-700 p-8 rounded-lg"
          >
            <div class="text-slate-400 text-4xl mb-4">"</div>
            <p class="text-slate-200 mb-6">{{ testimonial.text }}</p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-slate-600 rounded-full mr-4 overflow-hidden">
                  <img :src="testimonial.profile" :alt="testimonial.name" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="font-semibold">{{ testimonial.name }}</h4>
                  <p class="text-slate-400 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-linear-to-r from-slate-900 to-slate-700 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p class="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
          Let's create something extraordinary together. Schedule a consultation today.
        </p>
        <router-link 
          to="/contact" 
          class="inline-block bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
        >
          Book Consultation
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { Square3Stack3DIcon, PaintBrushIcon,HomeModernIcon, WrenchScrewdriverIcon }  from '@heroicons/vue/24/outline'
export default {
  name: 'Home',
  components: { Square3Stack3DIcon, PaintBrushIcon,HomeModernIcon, WrenchScrewdriverIcon
  },
  data() {
    return {
      featuredProjects: [
        {
          id: 1,
          title: 'Modern Living Room',
          description: 'Minimalist design with lunar-inspired accents',
          gradient: 'from-slate-600 to-slate-800',
          image: '/LunaInteriors3.jpg',
        },
        {
          id: 2,
          title: 'Luxury Bedroom Suite',
          description: 'Serene spaces for restful nights',
          gradient: 'from-slate-500 to-slate-700',
          image: '/LunaInteriors-8.jpg',
        },
        {
          id: 3,
          title: 'Contemporary Kitchen',
          description: 'Functional elegance meets modern style',
          gradient: 'from-slate-700 to-slate-900',
          image: '/LunaInteriors1.jpg',
        }
      ],
      services: [
        {
          id: 1,
          title: 'Space Planning',
          description: 'Optimize your layout for functionality and flow',
          icon: Square3Stack3DIcon
        },
        {
          id: 2,
          title: 'Color Consultation',
          description: 'Perfect palettes for your lunar aesthetic',
          icon: PaintBrushIcon
        },
        {
          id: 3,
          title: 'Furniture Selection',
          description: 'Curated pieces that complete your vision',
          icon: HomeModernIcon
        },
        {
          id: 4,
          title: 'Full Renovation',
          description: 'Complete transformations from concept to completion',
          icon: WrenchScrewdriverIcon
        }
      ],
      testimonials: [
        {
          id: 1,
          text: 'Luna Interiors transformed our home into a serene sanctuary. Their attention to detail is unmatched!',
          profile: '/User.jpg',
          name: 'Sarah Mitchell',
          role: 'Homeowner'
        },
        {
          id: 2,
          text: 'Professional, creative, and a pleasure to work with. They brought our vision to life perfectly.',
          profile: '/User.jpg',
          name: 'James Cooper',
          role: 'Business Owner'
        },
        {
          id: 3,
          text: 'The lunar-inspired design aesthetic is truly unique. We love our new space!',
          profile: '/User.jpg',
          name: 'Emily Rodriguez',
          role: 'Homeowner'
        }
      ]
    }
  }
}
</script>