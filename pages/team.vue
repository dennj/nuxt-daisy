<template>
  <div class="container mx-auto py-12">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center mb-8">Our Team</h1>

    <!-- Team Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Team Member -->
      <div v-for="member in team" :key="member.id" class="text-center bg-gray-100 p-6 rounded-lg shadow">
        <img :src="member.image" :alt="`${member.name} photo`" class="w-24 h-24 mx-auto rounded-full mb-4" />
        <h2 class="text-xl font-semibold mb-2">{{ member.name }}</h2>
        <p class="text-gray-600 mb-4">{{ member.position }}</p>
        <p class="text-gray-500">{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Example data for team members
const team = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO & Founder',
    description: 'John leads the company with 20 years of experience in private equity and mergers.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Chief Financial Officer',
    description: 'Jane manages financial operations and investor relations.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Head of Investments',
    description: 'Michael oversees investment strategies and portfolio performance.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
];
</script>

<style scoped>
/* Optional Custom Styles */
</style>
