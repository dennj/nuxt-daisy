<script setup lang="ts">
const user = useSupabaseUser()

useHead({
  title: 'Pluton Capital',
  meta: [
    {
      name: 'description',
      content: 'Pluton Capital is a Private Equity firm in the Republic of Ireland specialized in acquiring and merging companies in fragmented markets.',
    },
    { name: 'theme-color', content: '#143d5c' }
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
          <a href="/" class="btn btn-ghost normal-case text-2xl">
            Pluton Capital
          </a>
          <p v-if="user" class="text-lg text-red">Welcome, {{ user.user_metadata.full_name || 'User' }}!</p>
        </div>
        <div class="flex-none">
          <!-- Mobile Dropdown Menu -->
          <div class="dropdown dropdown-end md:hidden">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
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
            <a href="mailto:info@pluton.capital?subject=Business Inquiry&body=Dear Pluton Capital,%0D%0A%0D%0AI am an Investor/Broker/Seller working for ... %0D%0A%0D%0AI would like to inquire about ... %0D%0A%0D%0AThank you,%0D%0A[Your Name]"
              class="link text-white">
              info@pluton.capital
            </a>
          </div>
        </div>
      </div>

      <!-- Lower Bar -->
      <div class="bg-black py-5">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <!-- Social Links -->
          <div class="flex space-x-6">
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/company/pluton-capital" target="_blank"
              class="flex items-center space-x-2 text-white hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8.2 20.5H4.6V9h3.6v11.5zM6.4 7.7c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zM20.5 20.5h-3.6V14c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3v6.6h-3.6V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7v6z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <!-- WhatsApp -->
            <a href="https://wa.me/353852569755" target="_blank"
              class="flex items-center space-x-2 text-white hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308" class="h-5 w-5" fill="currentColor">
                <g>
                  <path
                    d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458C233.168,179.508,230.845,178.393,227.904,176.981z" />
                  <path
                    d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867C276.546,215.678,222.799,268.994,156.734,268.994z" />
                </g>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <!-- Company Registration -->
          <p class="text-xs text-white text-center md:text-left">
            Incorporated in Republic Of Ireland
            <a href="https://core.cro.ie/e-commerce/company/5411480"><strong>772965</strong></a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
