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
        class="text-center bg-white p-6 rounded-lg shadow"
      >
        <!-- Image Container -->
        <div class="w-full h-96 overflow-hidden rounded-lg bg-gray-100">
          <img
            :src="member.image"
            :alt="`${member.name} photo`"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Member Name -->
        <h2 class="text-xl font-semibold text-gray-800 mt-4">{{ member.name }}</h2>
        <!-- Member Position -->
        <p class="text-gray-600">{{ member.position }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import DennjOseleImage from '@/assets/images/team/dennj-osele.jpg';
import RaghavBolaImage from '@/assets/images/team/raghav-bola.jpg';

const team = [
  {
    id: 1,
    name: 'Dennj Osele',
    position: 'Tech Lead',
    description: 'John leads the company with 20 years of experience in private equity and mergers.',
    image: DennjOseleImage,
  },
  {
    id: 2,
    name: 'Raghav Bola',
    position: 'Financial Officer',
    description: 'Jane manages financial operations and investor relations.',
    image: RaghavBolaImage,
  },
];
</script>

<style scoped>
/* Optional Custom Styles */
</style>
