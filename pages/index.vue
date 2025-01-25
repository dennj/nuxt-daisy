<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-base-200 text-base-content min-h-[80vh] py-10 flex items-center">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <!-- Text Content -->
        <div class="text-center md:text-left mb-8 md:mb-0 md:w-1/2 md:mr-4">
          <h1 class="text-7xl font-bold mb-4 text-secondary">Pluton Capital</h1>
          <h2 class="text-4xl font-bold mb-6 text-gray-900">Building Strong and Consistent Services Businesses</h2>
          <p class="mb-8 text-lg text-gray-700">
            Pluton Capital specializes in rollup (Buy&Merge) strategies within fragmented service markets, driving value
            by
            increasing multiples and providing business strategy and technological expertise.
          </p>
          <a href="mailto:info@pluton.capital?subject=Business Inquiry&body=Dear Pluton Capital,%0D%0A%0D%0AI am an Investor/Broker/Seller working for ... %0D%0A%0D%0AI would like to inquire about ... %0D%0A%0D%0AThank you,%0D%0A[Your Name]"
            class="btn btn-primary btn-lg">
            Get In Touch
          </a>
        </div>

        <!-- Hero Image -->
        <div class="md:w-1/2 md:ml-4">
          <NuxtImg src="/images/kelly.jpg" alt="Hero Image" width="1200" height="800"
            class="rounded-lg w-full h-auto" />
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section id="problems" class="min-h-[80vh] py-10 flex items-center bg-primary">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8 text-gray-100">Problems in the Irish Service Market</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Problem Card 1 -->
          <div class="card bg-base-200">
            <figure class="w-full">
              <NuxtImg src="/images/puzzle.jpg" alt="Fragmented Market" class="w-full h-48 object-cover rounded-t-lg" />
            </figure>
            <div class="card-body">
              <h4 class="text-xl font-bold mb-4 text-primary">Fragmented Market</h4>
              <p class="text-base-content">
                The Irish service market is highly fragmented, creating inefficiencies and limiting growth potential.
              </p>
            </div>
          </div>

          <!-- Problem Card 2 -->
          <div class="card bg-base-200">
            <figure class="w-full">
              <NuxtImg src="/images/retire.jpg" alt="Fragmented Market" class="w-full h-48 object-cover rounded-t-lg" />
            </figure>
            <div class="card-body">
              <h4 class="text-xl font-bold mb-4 text-primary">Aging Business Owners</h4>
              <p class="text-base-content">
                20% of business owners are over 60 and looking to retire, leaving businesses without succession plans.
              </p>
            </div>
          </div>

          <!-- Problem Card 3 -->
          <div class="card bg-base-200">
            <figure class="w-full">
              <NuxtImg src="/images/euro.jpg" alt="Fragmented Market" class="w-full h-48 object-cover rounded-t-lg" />
            </figure>
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
    <section id="about" class="min-h-[80vh] py-10 flex items-center bg-base-200">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8 text-base-content">About Pluton Capital</h3>
        <p class="text-base-content/90 text-lg mb-16">
          Pluton Capital is a leading private equity firm committed to empowering businesses through strategic
          investments and operational excellence.
        </p>

        <!-- DaisyUI Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button v-for="(step, index) in steps" :key="index"
            class="tab p-4 w-40 h-20 flex items-center justify-center text-center font-bold rounded-lg cursor-pointer transition-all text-base-content border-2"
            :class="{
              'bg-primary text-primary-content': activeTab === index,
              'bg-base-100 text-base-content': activeTab !== index,
              'hover:bg-primary hover:text-primary-content': activeTab !== index,
            }" @mouseover="activeTab = index">
            {{ step.title }}
          </button>
        </div>

        <!-- Description Box -->
        <div class="card w-full max-w-3xl mx-auto bg-base-100">
          <div class="card-body">
            <p class="text-lg text-base-content">{{ steps[activeTab].description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action --><!--
    <section id="about" class="min-h-[50vh] py-10 flex items-center bg-base-200">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold mb-8 text-base-content">Work with us!</h3>
        <p class="text-base-content/90 text-lg mb-16">
          ...
        </p>
      </div>
    </section> -->
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
