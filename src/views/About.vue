<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-[url('/LunaInteriorAbout.jpg')] bg-cover text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">About Luna Interiors</h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto">
          Where celestial inspiration meets timeless design
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded in 2018, Luna Interiors was born from a passion for creating spaces that feel as serene and inspiring as a moonlit night. Our founder, inspired by the timeless beauty of lunar aesthetics, set out to bring that sense of calm elegance into homes and businesses.
              </p>
              <p>
                What started as a one-person operation has grown into a full-service design studio, but our core philosophy remains unchanged: every space should be a sanctuary, a place where form meets function in perfect harmony.
              </p>
              <p>
                Today, we've completed over 200 projects across residential and commercial sectors, each one reflecting our commitment to quality, creativity, and our signature lunar-inspired aesthetic that balances sophistication with comfort.
              </p>
            </div>
          </div>
          <div class="h-96 bg-linear-to-br from-slate-500 to-slate-800 rounded-lg shadow-2xl flex items-center justify-center text-white text-9xl ">
            <img src="/LunaInteriors1.jpg" alt="Lunar Interiors">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Philosophy -->
    <section class="py-20 bg-slate-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Our Design Philosophy</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">
            The principles that guide every project we undertake
          </p>
        </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              v-for="principle in principles" 
              :key="principle.id"
              class="bg-white p-8 rounded-lg shadow-md"
            >
              <div class="mb-4">
                <component v-if="typeof principle.icon !== 'string'" :is="principle.icon" class="w-12 h-12 text-slate-700" />
                <div v-else class="text-5xl">{{ principle.icon }}</div>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">{{ principle.title }}</h3>
              <p class="text-slate-600 leading-relaxed">{{ principle.description }}</p>
            </div>
          </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <p class="text-slate-600 text-lg">
            Talented designers dedicated to bringing your vision to life
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="member in team" 
            :key="member.id"
            class="text-center group"
          >
            <div class="w-48 h-48 mx-auto mb-6 bg-linear-to-br rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                 :class="member.gradient">
              <div class="w-full h-full flex items-center justify-center text-white text-6xl">
                <img :src="member.profile" :alt="member.name">
              </div>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-1">{{ member.name }}</h3>
            <p class="text-slate-600 mb-2">{{ member.role }}</p>
            <p class="text-sm text-slate-500">{{ member.specialty }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-slate-900 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Our Values</h2>
          <p class="text-slate-300 text-lg">What we stand for in every project</p>
        </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              v-for="value in values" 
              :key="value.id"
              class="text-center"
            >
              <div class="mb-4 flex justify-center">
                <component v-if="typeof value.icon !== 'string'" :is="value.icon" class="w-12 h-12 text-white" />
                <div v-else class="text-4xl">{{ value.icon }}</div>
              </div>
              <h3 class="text-xl font-bold mb-2">{{ value.title }}</h3>
              <p class="text-slate-300">{{ value.description }}</p>
            </div>
          </div>
      </div>
    </section>

    <!-- Awards & Recognition -->
    <section class="py-20 bg-slate-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Awards & Recognition</h2>
          <p class="text-slate-600 text-lg">Honored for excellence in interior design</p>
        </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              v-for="award in awards" 
              :key="award.id"
              class="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div class="mb-4 flex justify-center">
                <component v-if="typeof award.icon !== 'string'" :is="award.icon" class="w-16 h-16 text-slate-700" />
                <div v-else class="text-5xl">{{ award.icon }}</div>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">{{ award.title }}</h3>
              <p class="text-slate-600 mb-2">{{ award.organization }}</p>
              <p class="text-sm text-slate-500">{{ award.year }}</p>
            </div>
          </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-linear-to-r from-slate-800 to-slate-700 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Let's Create Something Beautiful Together</h2>
        <p class="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
          Ready to transform your space with Luna Interiors?
        </p>
        <router-link 
          to="/contact" 
          class="inline-block bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300"
        >
          Get In Touch
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { SparklesIcon, StarIcon, CheckBadgeIcon, LightBulbIcon, TrophyIcon, HandThumbUpIcon, ScaleIcon } from '@heroicons/vue/24/outline'
export default {
  name: 'About',
  components: { SparklesIcon, StarIcon, CheckBadgeIcon,  LightBulbIcon, TrophyIcon, HandThumbUpIcon, ScaleIcon  } ,
  data() {
    return {
      principles: [
        {
          id: 1,
          title: 'Timeless Elegance',
          description: 'We create designs that transcend trends, focusing on classic beauty with contemporary touches that will remain stunning for years to come.',
          icon: SparklesIcon
        },
        {
          id: 2,
          title: 'Functional Beauty',
          description: 'Every design element serves a purpose. We believe that truly great design is both beautiful and practical, enhancing your daily life.',
          icon: StarIcon
        },
        {
          id: 3,
          title: 'Personal Touch',
          description: 'Your space should reflect who you are. We listen carefully to understand your lifestyle, preferences, and dreams for your space.',
          icon: CheckBadgeIcon
        }
      ],
      team: [
        {
          id: 1,
          name: 'Diana Sterling',
          role: 'Founder & Lead Designer',
          specialty: 'Residential Design',
          gradient: 'from-slate-600 to-slate-800',
          profile: '/User.jpg'
        },
        {
          id: 2,
          name: 'Marcus Chen',
          role: 'Senior Designer',
          specialty: 'Commercial Spaces',
          gradient: 'from-slate-500 to-slate-700',
          profile: '/User.jpg'
        },
        {
          id: 3,
          name: 'Sofia Rodriguez',
          role: 'Color Specialist',
          specialty: 'Color & Materials',
          gradient: 'from-slate-600 to-slate-800',
          profile: '/User.jpg'
        },
        {
          id: 4,
          name: 'Alex Kim',
          role: 'Project Manager',
          specialty: 'Client Relations',
          gradient: 'from-slate-700 to-slate-900',
          profile: '/User.jpg'
        }
      ],
      values: [
        {
          id: 1,
          title: 'Excellence',
          description: 'We pursue perfection in every detail',
          icon: TrophyIcon
        },
        {
          id: 2,
          title: 'Integrity',
          description: 'Honest, transparent communication always',
          icon: HandThumbUpIcon
        },
        {
          id: 3,
          title: 'Innovation',
          description: 'Fresh ideas with timeless appeal',
          icon: LightBulbIcon
        },
        {
          id: 4,
          title: 'Sustainability',
          description: 'Eco-conscious material choices',
          icon: ScaleIcon
        }
      ],
      awards: [
        {
          id: 1,
          title: 'Best Residential Design',
          organization: 'Interior Design Excellence Awards',
          year: '2023',
          icon: TrophyIcon
        },
        {
          id: 2,
          title: 'Rising Star Studio',
          organization: 'Design Magazine',
          year: '2022',
          icon: StarIcon
        },
        {
          id: 3,
          title: 'Sustainable Design Award',
          organization: 'Green Living Association',
          year: '2023',
          icon: ScaleIcon
        }
      ]
    }
  }
}
</script>