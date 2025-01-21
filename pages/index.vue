<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-base-200 text-base-content py-20 text-center">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6">Empowering Growth Through Strategic Investments</h2>
        <p class="mb-8 text-lg">
          At Pluton Capital, we drive innovation and deliver value through tailored financial solutions.
        </p>
        <button class="btn btn-primary btn-lg">
          Learn More
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-base-100">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8 text-base-content">About Pluton Capital</h3>
        <p class="text-base-content/60 text-lg mb-16">
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
              class="btn btn-outline btn-primary"
            >
              {{ step.title }}
            </button>
          </div>

          <!-- Description Box -->
          <div class="card w-full max-w-3xl mx-auto shadow-lg">
            <div class="card-body">
              <p class="text-lg text-base-content">{{ activeDescription }}</p>
            </div>
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
