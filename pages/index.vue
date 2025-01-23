<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-base-200 text-base-content py-20">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <!-- Text Content -->
        <div class="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h2 class="text-4xl font-bold mb-6">Empowering Growth Through Strategic Investments</h2>
          <p class="mb-8 text-lg">
            At Pluton Capital, we drive innovation and deliver value through tailored financial solutions.
          </p>
          <button class="btn btn-primary btn-lg">
            Learn More
          </button>
        </div>

        <!-- Hero Image -->
        <div class="md:w-1/2">
          <NuxtImg img src="/images/kelly.jpg" alt="Hero Image" width="1200" height="800"
            class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section id="problems" class="py-20 bg-base-100">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8 text-base-content">Problems in the Irish Service Market</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Problem Card 1 -->
          <div class="card shadow-lg bg-base-200">
            <div class="card-body">
              <h4 class="text-xl font-bold mb-4 text-primary">Fragmented Market</h4>
              <p class="text-base-content">
                The Irish service market is highly fragmented, creating inefficiencies and limiting growth potential.
              </p>
            </div>
          </div>

          <!-- Problem Card 2 -->
          <div class="card shadow-lg bg-base-200">
            <div class="card-body">
              <h4 class="text-xl font-bold mb-4 text-primary">Aging Business Owners</h4>
              <p class="text-base-content">
                20% of business owners are over 60 and looking to retire, leaving businesses without succession plans.
              </p>
            </div>
          </div>

          <!-- Problem Card 3 -->
          <div class="card shadow-lg bg-base-200">
            <div class="card-body">
              <h4 class="text-xl font-bold mb-4 text-primary">Scaling Challenges</h4>
              <p class="text-base-content">
                Many owners lack the capital and expertise needed to scale their businesses effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-base-200">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8 text-base-content">About Pluton Capital</h3>
        <p class="text-base-content/90 text-lg mb-16">
          Pluton Capital is a leading private equity firm committed to empowering businesses through strategic
          investments and operational excellence.
        </p>

        <!-- Custom Styled Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <a v-for="(step, index) in steps" :key="index"
            class="tab p-6 w-40 h-40 flex items-center justify-center text-center font-bold rounded-lg shadow-lg cursor-pointer transition-all"
            :class="{
              'bg-primary text-primary-content': activeTab === index,
              'bg-base-100 text-base-content': activeTab !== index,
              'hover:bg-primary hover:text-primary-content': activeTab !== index,
            }" @mouseover="activeTab = index">
            {{ step.title }}
          </a>
        </div>

        <!-- Description Box -->
        <div class="card w-full max-w-3xl mx-auto shadow-lg bg-base-100">
          <div class="card-body">
            <p class="text-lg text-base-content">{{ steps[activeTab].description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Steps data
const steps = [
  {
    title: 'Relationships',
    description: 'We leverage relationships with brokers. They know what we are looking for and we have established partnerships.',
  },
  {
    title: 'Rollups',
    description: 'Explain rollup strategy. This is how we buy a business and consolidate companies in fragmented markets.',
  },
  {
    title: 'Merge',
    description: 'Explain how mergers work. We retain one of the previous owners as a manager of the new entity to ensure continuity.',
  },
  {
    title: 'Operational',
    description: 'Focus on financial engineering and operational excellence to optimize efficiency and profitability.',
  },
  {
    title: 'Exit',
    description: 'We sell the business at a higher multiple because it is now a larger entity with improved processes and profitability.',
  },
];

// Active tab index
const activeTab = ref(0);
</script>
