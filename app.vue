<script setup>
useHead({
  title: 'Pluton Capital',
  meta: [
    {
      name: 'description',
      content: 'Pluton Capital is a Private Equity firm in the Republic of Ireland specializing in acquiring and merging companies in fragmented markets.',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});

// Import Nuxt's router to access the routes
import { useRouter } from 'vue-router';

// Get available routes dynamically
const router = useRouter();
const navLinks = router.options.routes
  .filter((route) => route.path !== '/' && !route.path.includes(':')) // Exclude dynamic and root routes
  .map((route) => ({
    name: route.name || route.path.replace('/', ''), // Use route name or derive from path
    path: route.path,
  }));
</script>

<template>
  <div>
    <!-- Global Header -->
    <header class="bg-gray-900 text-white py-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold">
          <a href="/">Pluton Capital</a>
        </h1>

        <!-- Dynamic Navigation -->
        <nav>
          <ul class="flex space-x-6">
            <li v-for="link in navLinks" :key="link.path">
              <a :href="link.path" class="hover:text-gray-300 capitalize">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Dynamic Page Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <footer class="bg-gray-900 text-white py-6 text-center">
      <p>&copy; 2025 Pluton Capital. All rights reserved.</p>
    </footer>
  </div>
</template>
