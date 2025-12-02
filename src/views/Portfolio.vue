<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-[url('/LunaInteriorPortfolio.jpg')] bg-cover text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto">
          Explore our collection of stunning interior design projects
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="bg-white border-b border-slate-200 sticky top-16 z-40">
      <div class="container mx-auto px-6 py-4">
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-all duration-300',
              selectedCategory === category
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <!-- Project Image Placeholder -->
            <div 
              class="h-72 overflow-hidden relative"
              :class="project.gradient"
            >
              <div class="absolute inset-0 flex items-center justify-center text-white text-7xl opacity-80 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-110 transform overflow-hidden">
                <img class="" :src="project.image" :alt="project.category">
              </div>
              <div class="absolute top-4 right-4">
                <span class="bg-white text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {{ project.category }}
                </span>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <h3 class="text-2xl font-bold text-slate-900 mb-2">{{ project.title }}</h3>
              <p class="text-slate-600 mb-4">{{ project.description }}</p>
              
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  <span class="font-semibold">{{ project.area }}</span>
                </div>
                <button class="text-slate-900 font-semibold hover:text-slate-600 transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <p class="text-slate-600 text-xl">No projects found in this category.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-slate-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Like What You See?</h2>
        <p class="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can bring your interior design vision to life
        </p>
        <router-link 
          to="/contact" 
          class="inline-block bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300"
        >
          Start Your Project
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Commercial'],
      projects: [
        {
          id: 1,
          title: 'Moonlit Living Space',
          description: 'A contemporary living room with soft lunar tones and natural textures',
          category: 'Living Room',
          area: '450 sq ft',
          gradient: 'bg-gradient-to-br from-slate-400 to-slate-600',
          image: '/LunaInteriors-5.jpg'
        },
        {
          id: 2,
          title: 'Celestial Bedroom',
          description: 'Tranquil bedroom design featuring silver and navy accents',
          category: 'Bedroom',
          area: '320 sq ft',
          gradient: 'bg-gradient-to-br from-slate-500 to-slate-700',
          image: '/LunaInteriors-1.jpg'
        },
        {
          id: 3,
          title: 'Modern Stellar Kitchen',
          description: 'Sleek kitchen with metallic finishes and marble countertops',
          category: 'Kitchen',
          area: '280 sq ft',
          gradient: 'bg-gradient-to-br from-slate-600 to-slate-800',
          image: '/LunaInteriors1.jpg'
        },
        {
          id: 4,
          title: 'Eclipse Home Office',
          description: 'Productive workspace with minimalist lunar aesthetics',
          category: 'Office',
          area: '200 sq ft',
          gradient: 'bg-gradient-to-br from-slate-700 to-slate-900',
          image: '/LunaInteriors-6.jpg'
        },
        {
          id: 5,
          title: 'Starlight Lounge',
          description: 'Luxurious commercial lounge with ambient lighting',
          category: 'Commercial',
          area: '800 sq ft',
          gradient: 'bg-gradient-to-br from-slate-500 to-slate-800',
          image: '/LunaInteriors3.jpg'
        },
        {
          id: 6,
          title: 'Aurora Living Room',
          description: 'Open concept living with panoramic views and soft furnishings',
          category: 'Living Room',
          area: '520 sq ft',
          gradient: 'bg-gradient-to-br from-slate-400 to-slate-700',
          image: '/LunaInteriors-6.jpg'
        },
        {
          id: 7,
          title: 'Nebula Master Suite',
          description: 'Elegant master bedroom with walk-in closet and spa bathroom',
          category: 'Bedroom',
          area: '480 sq ft',
          gradient: 'bg-gradient-to-br from-slate-600 to-slate-800',
          image: '/LunaInteriors-1.jpg'
        },
        {
          id: 8,
          title: 'Cosmic Kitchen Design',
          description: 'Contemporary kitchen with smart storage and premium appliances',
          category: 'Kitchen',
          area: '350 sq ft',
          gradient: 'bg-gradient-to-br from-slate-500 to-slate-700',
          image: '/LunaInteriors-3.jpg'
        },
        {
          id: 9,
          title: 'Lunar Executive Office',
          description: 'High-end office space with custom millwork and technology integration',
          category: 'Office',
          area: '380 sq ft',
          gradient: 'bg-gradient-to-br from-slate-700 to-slate-900',
          image: '/LunaInteriors-7.jpg'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'All') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.selectedCategory)
    }
  }
}
</script>