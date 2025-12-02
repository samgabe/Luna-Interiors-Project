<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-[url('/LunaInteriorContact.jpg')] bg-cover text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto">
          Let's start the conversation about your dream space
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <p class="text-slate-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-slate-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-slate-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-slate-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <!-- Service Interest -->
              <div>
                <label for="service" class="block text-slate-700 font-semibold mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  v-model="formData.service"
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="full-design">Full Interior Design</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="room-refresh">Room Refresh</option>
                  <option value="color">Color Consultation</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Budget -->
              <div>
                <label for="budget" class="block text-slate-700 font-semibold mb-2">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  v-model="formData.budget"
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-slate-700 font-semibold mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                  placeholder="Describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>

              <!-- Success Message -->
              <div v-if="submitSuccess" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                Thank you for your message! We'll be in touch soon.
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <div class="bg-slate-100 p-8 rounded-lg mb-8">
              <h3 class="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-slate-900 text-white p-3 rounded-lg mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p class="text-slate-600">(555) 123-4567</p>
                    <p class="text-sm text-slate-500 mt-1">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-slate-900 text-white p-3 rounded-lg mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-slate-900 mb-1">Email</h4>
                    <p class="text-slate-600">info@lunainteriors.com</p>
                    <p class="text-sm text-slate-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-slate-900 text-white p-3 rounded-lg mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-slate-900 mb-1">Studio Location</h4>
                    <p class="text-slate-600">123 Design Avenue</p>
                    <p class="text-slate-600">New York, NY 10001</p>
                    <p class="text-sm text-slate-500 mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="bg-slate-900 text-white p-8 rounded-lg mb-8">
              <h3 class="text-2xl font-bold mb-6">Office Hours</h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span>Monday - Friday</span>
                  <span class="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Saturday</span>
                  <span class="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Sunday</span>
                  <span class="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-slate-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-slate-900 mb-6">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="bg-slate-900 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="bg-slate-900 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" class="bg-slate-900 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-slate-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p class="text-slate-600 text-lg">Quick answers to common questions</p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div 
            v-for="faq in faqs" 
            :key="faq.id"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              @click="toggleFAQ(faq.id)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900">{{ faq.question }}</span>
              <svg
                class="w-5 h-5 text-slate-600 transform transition-transform"
                :class="{ 'rotate-180': faq.open }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="faq.open" class="px-6 pb-4 text-slate-600">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: false,
      errorMessage: '',
      faqs: [
        {
          id: 1,
          question: 'How long does a typical project take?',
          answer: 'Timeline varies by project scope. A single room refresh typically takes 4-6 weeks, while full home designs can take 3-6 months from consultation to completion.',
          open: false
        },
        {
          id: 2,
          question: 'Do you work within specific budgets?',
          answer: 'Yes! We work with a range of budgets and can tailor our services accordingly. During our initial consultation, we discuss your budget and create a plan that works for you.',
          open: false
        },
        {
          id: 3,
          question: 'What areas do you serve?',
          answer: 'We primarily serve the New York metropolitan area, but also take on select projects nationally. Virtual consultations are available for clients anywhere.',
          open: false
        },
        {
          id: 4,
          question: 'Can I purchase items on my own?',
          answer: 'Absolutely! We can provide shopping lists and guidance for you to purchase items yourself, or we can handle all procurement through our trade accounts.',
          open: false
        },
        {
          id: 5,
          question: 'Do you offer virtual design services?',
          answer: 'Yes, we offer comprehensive virtual design services including consultations, e-design packages, and remote project management for clients outside our local area.',
          open: false
        }
      ]
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      this.submitError = false;
      this.errorMessage = '';

      try {
        const response = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData)
        });

        const data = await response.json();

        if (response.ok && data.success) {
          this.submitSuccess = true;
          this.formData = {
            name: '',
            email: '',
            phone: '',
            service: '',
            budget: '',
            message: ''
          };

          // Hide success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        } else {
          this.submitError = true;
          this.errorMessage = data.message || 'Failed to submit form. Please try again.';
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        this.submitError = true;
        this.errorMessage = 'Network error. Please check your connection and try again.';
      } finally {
        this.isSubmitting = false;
      }
    },
    toggleFAQ(id) {
      const faq = this.faqs.find(f => f.id === id);
      if (faq) {
        faq.open = !faq.open;
      }
    }
  }
}
</script>