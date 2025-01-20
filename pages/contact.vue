<template>
  <div class="container mx-auto py-12 px-4">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center mb-8">Contact Us</h1>

    <!-- Contact Information -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Details -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Get in Touch</h2>
        <p class="text-gray-600">We’d love to hear from you. Reach out to us via any of the methods below:</p>

        <ul class="space-y-2 text-gray-700">
          <li>
            <strong>Email:</strong> 
            <a href="mailto:info@pluton.capital" class="text-blue-500 hover:underline">info@pluton.capital</a>
          </li>
          <li>
            <strong>Phone:</strong> 
            <a href="tel:+393338751965" class="text-blue-500 hover:underline">+39 333 875 1965</a>
          </li>
          <li>
            <strong>Address:</strong>
            <p>The CHQ Building, <br /> Custom House Quay, <br /> Dublin 1, D01 Y6H7, <br /> Ireland</p>
          </li>
        </ul>
      </div>

      <!-- Embedded Map (Google Maps) -->
      <div class="h-64 md:h-full">
        <iframe
          class="w-full h-full rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.933905208798!2d-6.245833684007658!3d53.34881277997988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80df7c1625%3A0x8c9075eab96c299b!2sThe%20CHQ%20Building!5e0!3m2!1sen!2sie!4v1674217893000!5m2!1sen!2sie"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional custom styles for padding or responsiveness */
</style>
