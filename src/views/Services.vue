<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-[url('/LunaInteriorServices.jpg')] bg-cover text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto">
          Comprehensive interior design solutions tailored to illuminate your space
        </p>
      </div>
    </section>

    <!-- Main Services -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="space-y-20">
          <div 
            v-for="(service, index) in mainServices" 
            :key="service.id"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Service Image Placeholder -->
            <div class="overflow-hidden"
              :class="[
                'h-96 rounded-lg shadow-xl',
                service.gradient,
                'flex items-center justify-center text-white text-8xl',
                { 'lg:order-2': index % 2 === 1 }
              ]"
            >
              <span class="">
                <img :src="service.image" :alt="service.title"></span>
            </div>

            <!-- Service Content -->
            <div :class="{ 'lg:order-1': index % 2 === 1 }">
              <h2 class="text-4xl font-bold text-slate-900 mb-4">{{ service.title }}</h2>
              <p class="text-slate-600 text-lg mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              
              <ul class="space-y-3 mb-8">
                <li 
                  v-for="(feature, idx) in service.features" 
                  :key="idx"
                  class="flex items-start"
                >
                  <svg class="w-6 h-6 text-slate-700 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-slate-700">{{ feature }}</span>
                </li>
              </ul>

              <div class="flex items-center gap-4">
                <span class="text-3xl font-bold text-slate-900">{{ service.price }}</span>
                <span class="text-slate-600">{{ service.priceNote }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-20 bg-slate-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
          <p class="text-slate-600 text-lg">Specialized solutions for every need</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="service in additionalServices" 
            :key="service.id"
            class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div class="text-5xl mb-4">
              <img :src="service.image" :alt="service.title"></div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ service.title }}</h3>
            <p class="text-slate-600 mb-6">{{ service.description }}</p>
            <div class="text-slate-900 font-semibold">{{ service.price }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
          <p class="text-slate-600 text-lg">From concept to completion in 4 simple steps</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in process" 
            :key="step.id"
            class="text-center"
          >
            <div class="bg-slate-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">{{ step.title }}</h3>
            <p class="text-slate-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing CTA -->
    <section class="py-20 bg-linear-to-r from-slate-900 to-slate-700 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p class="text-xl text-slate-200 mb-8">
            Schedule a free consultation to discuss your project and get a custom quote
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact" 
              class="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300"
            >
              Book Free Consultation
            </router-link>
            <button 
              class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Download Pricing Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      mainServices: [
        {
          id: 1,
          title: 'Full Interior Design',
          description: 'Complete design solutions from initial consultation to final installation. We handle every aspect of your project, creating cohesive spaces that reflect your personality and meet your functional needs.',
          features: [
            'Initial consultation and space assessment',
            'Concept development and mood boards',
            '3D renderings and floor plans',
            'Material and furniture selection',
            'Project management and installation',
            'Final styling and reveal'
          ],
          price: 'From $5,000',
          priceNote: 'per room',
          gradient: 'bg-gradient-to-br from-slate-600 to-slate-800',
          image: '/LunaInteriorDesign.jpg'
        },
        {
          id: 2,
          title: 'Design Consultation',
          description: 'Expert guidance for your DIY projects. Perfect for those who want professional direction while maintaining control of their renovation. Get actionable advice and detailed plans to execute on your own.',
          features: [
            '2-hour in-home or virtual consultation',
            'Room layout and space planning',
            'Color palette recommendations',
            'Furniture placement suggestions',
            'Shopping list with specific recommendations',
            'Follow-up email support for 30 days'
          ],
          price: '$500',
          priceNote: 'per session',
          gradient: 'bg-gradient-to-br from-slate-500 to-slate-700',
          image: '/LunaInteriorDesign1.jpg'
        },
        {
          id: 3,
          title: 'Room Refresh',
          description: 'Transform a single space without a complete overhaul. Ideal for updating tired rooms with new paint, accessories, lighting, and strategic furniture updates while working with some existing pieces.',
          features: [
            'Color consultation and paint selection',
            'Lighting design and fixture selection',
            'Accessory and art curation',
            'Furniture rearrangement',
            'Textile and soft goods selection',
            'Installation coordination'
          ],
          price: 'From $2,500',
          priceNote: 'per room',
          gradient: 'bg-gradient-to-br from-slate-700 to-slate-900',
          image: '/LunaInteriorDesign2.jpg'
        }
      ],
      additionalServices: [
        {
          id: 1,
          title: 'Color Consultation',
          description: 'Expert color selection for your entire home or individual rooms',
          price: 'From $300',
          image: '/LunaInteriorDesign4.jpg'
        },
        {
          id: 2,
          title: 'Furniture Sourcing',
          description: 'Curated furniture selection and procurement services',
          price: 'From $800',
          image: '/LunaInteriorDesign4.jpg'
        },
        {
          id: 3,
          title: 'Art Curation',
          description: 'Professional art selection and gallery wall design',
          price: 'From $600',
          image: '/LunaInteriors-8.jpg'
        },
        {
          id: 4,
          title: 'Lighting Design',
          description: 'Comprehensive lighting plans for ambiance and function',
          price: 'From $750',
          image: '/LunaInteriors-8.jpg'
        },
        {
          id: 5,
          title: 'Window Treatments',
          description: 'Custom curtain, blind, and shade consultation',
          price: 'From $400',
          image: '/LunaInteriors-9.jpg'
        },
        {
          id: 6,
          title: 'Commercial Design',
          description: 'Professional interior design for offices and retail spaces',
          price: 'Custom Quote',
          image: '/LunaInteriors-8.jpg'
        }
      ],
      process: [
        {
          id: 1,
          title: 'Discovery',
          description: 'We meet to understand your vision, needs, lifestyle, and budget'
        },
        {
          id: 2,
          title: 'Design',
          description: 'We create detailed plans, mood boards, and 3D visualizations'
        },
        {
          id: 3,
          title: 'Development',
          description: 'We source materials, coordinate contractors, and manage the project'
        },
        {
          id: 4,
          title: 'Delivery',
          description: 'We install, style, and reveal your beautifully transformed space'
        }
      ]
    }
  }
}
</script>