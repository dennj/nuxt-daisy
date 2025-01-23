<template>
  <div class="container mx-auto py-12">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center mb-8">Our Team - Page to hide for now.</h1>
    <!-- Team Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Team Member -->
      <div
        v-for="member in team"
        :key="member.id"
        class="card bg-base-100 shadow-lg"
      >
        <!-- Image -->
        <figure class="w-full h-64 overflow-hidden">
          <img
            :src="member.image"
            :alt="`${member.name} photo`"
            class="object-cover w-full h-full"
          />
        </figure>

        <!-- Card Body -->
        <div class="card-body items-center text-center">
          <!-- Name -->
          <h3 class="card-title text-lg">{{ member.name }}</h3>

          <!-- Position -->
          <p class="text-primary font-semibold">{{ member.position }}</p>

          <!-- Description -->
          <p class="text-gray-500">{{ member.description }}</p>

          <!-- Social Links -->
          <div class="card-actions mt-4">
            <a
              v-if="member.linkedin"
              :href="member.linkedin"
              target="_blank"
              class="btn btn-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DennjOseleImage from '@/assets/images/team/dennj-osele.jpg';
import RaghavBholaImage from '@/assets/images/team/raghav-bhola.jpg';

const team = [
  {
    id: 1,
    name: 'Dennj Osele',
    position: 'CEO & Founder',
    description: 'Dennj leads the company with 20 years of experience in private equity and mergers.',
    image: DennjOseleImage,
    linkedin: 'https://www.linkedin.com/in/dennjosele',
  },
  {
    id: 2,
    name: 'Raghav Bhola',
    position: 'Financial Officer',
    description: 'Raghav manages financial operations and investor relations.',
    image: RaghavBholaImage,
    linkedin: 'https://www.linkedin.com/in/raghavbhola',
  },
];
</script>

<style scoped>
</style>
