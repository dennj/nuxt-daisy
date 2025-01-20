<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-800 text-white py-20 text-center">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-4">Empowering Growth Through Strategic Investments</h2>
        <p class="mb-6">
          At Pluton Capital, we drive innovation and deliver value through tailored financial solutions.
        </p>
        <button class="bg-red-700 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
          Learn More
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-100">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-6">About Pluton Capital</h3>
        <p class="text-gray-700 text-lg mb-12">
          Pluton Capital is a leading private equity firm committed to empowering businesses through strategic
          investments and operational excellence.
        </p>

        <!-- Interactive Steps Component -->
        <div class="space-y-8">
          <!-- Steps -->
          <div class="flex justify-center space-x-4">
            <div v-for="(step, index) in steps" :key="index" @mouseover="activeDescription = step.description"
              @mouseleave="activeDescription = defaultDescription"
              class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer">
              {{ step.title }}
            </div>
          </div>

          <!-- Description Box -->
          <div class="mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow">
            <p class="text-gray-700">{{ activeDescription }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Default description
const defaultDescription = 'Hover over a step to see its description.';
const activeDescription = ref(defaultDescription);

// Steps data
const steps = [
  { title: 'Brokers Relation', description: 'Establish relationships with brokers to identify opportunities.' },
  { title: 'Choose CEO', description: 'Select an experienced CEO to lead the acquisition process.' },
  { title: 'Buy', description: 'Acquire a target company in the selected market.' },
  { title: 'Merge', description: 'Integrate and align the acquired companies.' },
  { title: 'Update Tech', description: 'Modernize technology to enhance operational efficiency.' },
  { title: 'Optimize Structure', description: 'Streamline the company structure for maximum efficiency.' },
  { title: 'Sell', description: 'Exit by selling the optimized and valuable business.' },
];
</script>
