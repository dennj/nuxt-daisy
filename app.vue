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
  <div class="flex flex-col min-h-screen">
    <!-- Global Header -->
    <header>
      <div class="navbar shadow-lg">
        <div class="flex-1">
          <a href="/" class="btn btn-ghost normal-case text-xl">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-2" alt="Pluton Capital" />
            Pluton Capital
          </a>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end md:hidden">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
              <li v-for="link in navLinks" :key="link.path">
                <a :href="link.path">{{ link.name }}</a>
              </li>
            </ul>
          </div>
          <ul class="menu menu-horizontal px-4 hidden md:flex">
            <li v-for="link in navLinks" :key="link.path">
              <a href="#">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Dynamic Page Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <footer class="footer p-4 text-center">
      <div class="container mx-auto">
        <p>&copy; 2025 Pluton Capital. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
