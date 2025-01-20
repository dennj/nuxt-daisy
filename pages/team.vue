<template>
  <div class="container mx-auto py-12">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center mb-8">Our Team</h1>

    <!-- Team Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Team Member -->
      <div
        v-for="member in team"
        :key="member.id"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md p-6"
      >
        <!-- Image -->
        <img
          :src="member.image"
          :alt="`${member.name} photo`"
          class="w-32 h-32 mb-4 rounded-full shadow-lg"
        />

        <!-- Name -->
        <h3 class="text-xl font-semibold text-gray-900">{{ member.name }}</h3>

        <!-- Position -->
        <p class="text-red-800">{{ member.position }}</p>

        <!-- Description -->
        <p class="text-gray-500">{{ member.description }}</p>

        <!-- Social Links -->
        <div class="flex mt-4 space-x-3">
          <a
            v-if="member.linkedin"
            :href="member.linkedin"
            target="_blank"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            LinkedIn
          </a>
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
    description: 'John leads the company with 20 years of experience in private equity and mergers.',
    image: DennjOseleImage,
    linkedin: 'https://www.linkedin.com/in/dennjosele',
  },
  {
    id: 2,
    name: 'Raghav Bhola',
    position: 'Financial Officer',
    description: 'Jane manages financial operations and investor relations.',
    image: RaghavBholaImage,
    linkedin: 'https://www.linkedin.com/in/raghavbhola',
  }
];
</script>

<style scoped>
</style>
