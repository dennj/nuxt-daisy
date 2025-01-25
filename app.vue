<script setup>
import logo from '@/assets/images/logo/logo.svg';

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
      <div class="navbar bg-gray-900 text-white">
        <div class="flex-1">
          <a href="/" class="btn btn-ghost normal-case text-xl">
            Pluton Capital
          </a>
        </div>
        <div class="flex-none">
          <!-- Mobile Dropdown Menu -->
          <div class="dropdown dropdown-end md:hidden">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 bg-gray-800">
              <li v-for="link in navLinks" :key="link.path">
                <a :href="link.path">
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Desktop Menu -->
          <ul class="menu menu-horizontal px-4 hidden md:flex">
            <li v-for="link in navLinks" :key="link.path">
              <a :href="link.path" class="hover:text-primary">{{ link.name }}</a>
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
    <footer class="bg-gray-900 text-white">
      <!-- Upper Bar -->
      <div class="bg-gray-900 py-5">
        <div class="container mx-auto flex items-center justify-between">
          <!-- Company Name -->
          <p class="text-lg font-bold">Pluton Capital</p>

          <!-- Navigation Links -->
          <div class="flex space-x-6">
            info@pluton.capital
          </div>
        </div>
      </div>

      <!-- Lower Bar -->
      <div class="bg-black py-5">
        <div class="container mx-auto flex items-center justify-between">
          <!-- LinkedIn Icon -->
          <a href="https://www.linkedin.com/company/pluton-capital" target="_blank"
            class="flex items-center space-x-2 text-white hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8.2 20.5H4.6V9h3.6v11.5zM6.4 7.7c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zM20.5 20.5h-3.6V14c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3v6.6h-3.6V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7v6z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <!-- Company Registration -->
          <p class="text-xs text-white">
            Incorporated in Republic Of Ireland
            <a href="https://core.cro.ie/e-commerce/company/5411480"><strong>772965</strong></a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
