<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-blue-50 text-gray-800 py-20 text-center">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">Empowering Growth Through Strategic Investments</h2>
        <p class="mb-8 text-lg">
          At Pluton Capital, we drive innovation and deliver value through tailored financial solutions.
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200">
          Learn More
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8 text-gray-800">About Pluton Capital</h3>
        <p class="text-gray-600 text-lg mb-16">
          Pluton Capital is a leading private equity firm committed to empowering businesses through strategic
          investments and operational excellence.
        </p>

        <!-- Interactive Steps Component -->
        <div class="space-y-10">
          <!-- Steps -->
          <div class="flex justify-center flex-wrap gap-4">
            <button
              v-for="(step, index) in steps"
              :key="index"
              @mouseover="activeDescription = step.description"
              @mouseleave="activeDescription = defaultDescription"
              class="bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium rounded-lg shadow px-6 py-3 transition-all duration-200"
            >
              {{ step.title }}
            </button>
          </div>

          <!-- Description Box -->
          <div class="max-w-3xl mx-auto p-8 bg-gray-50 border border-gray-200 rounded-lg shadow">
            <p class="text-gray-700 text-lg">{{ activeDescription }}</p>
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
