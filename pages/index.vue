<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-base-200 text-base-content min-h-[80vh] py-10 flex items-center">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <!-- Text Content -->
        <div class="text-center md:text-left mb-8 md:mb-0 md:w-1/2 md:mr-8">
          <h1 class="text-7xl font-bold mb-4 text-secondary">Pluton Capital</h1>
          <h2 class="text-4xl font-bold mb-6 text-gray-900">Building Strong and Consistent Service Businesses</h2>
          <p class="mb-8 text-lg text-gray-700">
            Pluton Capital specializes in rollup (Buy & Merge) strategies within fragmented service markets, increasing
            value through scale, business strategy, and technological expertise.
          </p>
          <NuxtLink to="/contact" class="btn btn-primary btn-lg">Get In Touch</NuxtLink>
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
          <div v-for="problem in problems" :key="problem.title" class="card bg-base-200">
            <figure class="w-full">
              <NuxtImg :src="problem.image" :alt="problem.title" class="w-full h-48 object-cover rounded-t-lg" />
            </figure>
            <div class="card-body">
              <h4 class="text-xl font-bold mb-4 text-primary">{{ problem.title }}</h4>
              <p class="text-base-content">{{ problem.description }}</p>
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
          Pluton Capital is a private equity firm focused on consolidating SMEs in Ireland's service sector and driving tech adoption.        </p>

        <!-- FAQ Style Accordion -->
        <div class="max-w-3xl mx-auto space-y-2">
          <div v-for="(step, index) in steps" :key="index"
            class="collapse collapse-arrow border border-secondary bg-base-100 rounded-lg">
            <input type="radio" name="faq-accordion" class="peer hidden" :id="'faq' + index" v-model="activeTab"
              :value="index" />
            <label :for="'faq' + index"
              class="collapse-title text-xl font-medium text-primary peer-checked:bg-secondary peer-checked:text-secondary-content cursor-pointer p-4"
              @mouseover="activeTab = index">
              {{ step.title }}
            </label>
            <div class="collapse-content">
              <p class="text-base-content p-4">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Questions & Answers -->
    <section class="text-center mb-10">
      <div class="container mx-auto bg-gray-100 rounded-lg p-6">
        <h3 class="text-3xl font-bold text-secondary mb-4">What is Pluton Capital?</h3>
        <p class="text-gray-700 text-lg leading-relaxed">
          Pluton Capital is a private equity firm based in Ireland, established in 2023. We specialize in roll-up
          strategies within fragmented service markets, leveraging finance, technology, and AI to drive company growth.
          Our funding comes from private investors who buy shares in the company. Unlike traditional private equity
          firms, we buy small businesses that offer higher potential but request more work to digitalize. Notably,
          we are the only private equity firm in Dublin focusing on roll-up strategies in the service industry.
          While this is a proven model in the U.S. market, the Irish market lags behind.
        </p>
      </div>
    </section>

    <section class="text-center mb-10">
      <div class="container mx-auto bg-gray-100 rounded-lg p-6">
        <h3 class="text-3xl font-bold text-secondary mb-4">What is Private Equity?</h3>
        <p class="text-gray-700 text-lg leading-relaxed">
          Private equity (PE) refers to investments in privately held companies that are not publicly traded. PE firms
          like Pluton Capital raise capital from investors to acquire, manage, and grow businesses before selling them
          at a profit. Each private equity company follows different investing strategies and specializes in specific market segments.
          A highly recommended book for understanding private equity is
          <a href="https://a.co/d/j827wdk" target="_blank" class="text-primary underline hover:text-secondary">
            "King of Capital: The Remarkable Rise, Fall, and Rise Again of Steve Schwarzman and Blackstone"
          </a>
          by David Carey and John E. Morris. This book provides a compelling look behind the scenes at one of the world’s
          most influential private equity firms, detailing the industry’s evolution and strategies.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Problem Data
const problems = [
  {
    title: 'Fragmented Market',
    description: 'The Irish service market is highly fragmented, creating inefficiencies and limiting growth potential.',
    image: '/images/puzzle.jpg'
  },
  {
    title: 'Aging Business Owners',
    description: '20% of business owners are over 60 and looking to retire, leaving businesses without succession plans.',
    image: '/images/retire.jpg'
  },
  {
    title: 'Scaling Challenges',
    description: 'Many owners lack the capital and expertise needed to scale their businesses effectively.',
    image: '/images/scale.jpg'
  }
];

// FAQ Data
const steps = [
  {
    title: 'Relationships',
    description: 'Pluton Capital works closely with brokers who understand the market and the types of businesses we aim to acquire. These brokers help identify businesses with solid operations but limited ability to grow. By relying on their knowledge and connections, we focus on finding businesses that are a good fit for our strategy of merging companies to improve efficiency and build value.',
  },
  {
    title: 'Rollups',
    description: 'Our strategy involves acquiring multiple small businesses within a fragmented market and consolidating them into a single, larger entity. By combining these businesses, we create operational efficiencies, reduce costs, and establish a stronger market presence. This approach not only enhances profitability through streamlined operations but also increases the overall enterprise value, as a larger, well-structured business is more attractive to investors or buyers. Rollups allow smaller companies to benefit from shared resources, improved technology, and strategic leadership, positioning them for long-term growth and scalability.',
  },
  {
    title: 'Merge',
    description: "When merging companies, we retain one of the previous owners as a manager of the newly consolidated entity to ensure continuity and leverage their expertise. To align their interests with ours, we offer them a share in the new business. During the integration process, we focus on standardizing software, procedures, and operations across all businesses to enhance efficiency. Overheads are reduced by consolidating redundant functions, while operations are streamlined to drive profitability. Throughout this phase, we work closely with the acquired businesses' previous owners during a transition period to ensure a smooth and effective merger.",
  },
  {
    title: 'Operational Improvements',
    description: 'We improve operations by focusing on financial engineering and operational excellence to enhance efficiency and profitability. Leveraging our strong tech and AI expertise, we streamline processes and implement data-driven improvements. We invest in new equipment to modernize operations and unify the branding, using design expertise to elevate marketing efforts. Additionally, we establish a robust organizational structure that ensures no individual is irreplaceable, promoting continuity and long-term stability within the business.',
  },
  {
    title: 'Exit Strategy',
    description: 'Small businesses typically face lower valuation multiples because they are highly dependent on the owner, lack access to capital, and are perceived as riskier investments. By merging these smaller companies into a larger entity, Pluton Capital creates a business with a solid management structure, access to capital, and greater stability. Larger companies are seen as more reliable and scalable, which makes them far more appealing to buyers. Additionally, our network of brokers collaborates to identify suitable buyers, ensuring a smooth exit at a significantly higher valuation multiple.',
  },
];

// Active tab state
const activeTab = ref(0);
</script>
