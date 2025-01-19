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
</script>

<template>
  <div>
    <!-- Global Header -->
    <header class="bg-gray-900 text-white py-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold">
          <a href="/">Pluton Capital</a>
        </h1>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="#about" class="hover:text-gray-300">About</a></li>
            <li><a href="#portfolio" class="hover:text-gray-300">Portfolio</a></li>
            <li><a href="#team" class="hover:text-gray-300">Team</a></li>
            <li><a href="#contact" class="hover:text-gray-300">Contact</a></li>
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
