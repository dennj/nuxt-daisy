<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold text-center mb-8">Our Projects</h1>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Project Clean -->
        <div class="card bg-white border-2 border-secondary rounded-lg">
          <figure class="w-full">
            <NuxtImg src="/images/laundry.avif" alt="Laundry" class="w-full h-48 object-cover rounded-t-lg"
              style="pointer-events: none;" />
          </figure>
          <div class="card-body p-6">
            <h2 class="card-title text-primary text-2xl font-semibold">Project Clean</h2>
            <p class="text-gray-900 mt-4">
              Acquiring three leading players, with a total of 8 locations and a phone app for laundry and dry cleaning.
              Promoters are offered 20% equity with reduced upfront consideration, leveraging their expertise in the new
              business. Four additional locations are under active negotiation, bringing the total to over 11 locations
              in three months.
            </p>
            <p class="text-gray-900 mt-4">
              The combined business has the potential to generate approximately €3.5 million in turnover and a 20%
              operating margin. These are stable businesses with long-term contracts with hotels and restaurants in
              Dublin.
              Future plans include consolidating 11 locations into a single brand, extending the app to all locations,
              developing a nationwide door-to-door delivery platform, and scaling to 35-50 locations. Exit potential is
              estimated at 3.5-5.2 times earnings multiple based on technology-driven growth and synergies.
            </p>
            <a href="mailto:info@pluton.capital?subject=Business Inquiry&body=Dear Pluton Capital,%0D%0A%0D%0AI am an Investor/Broker/Seller working for ... %0D%0A%0D%0AI would like to hear more about the laundry project ... %0D%0A%0D%0AThank you,%0D%0A[Your Name]"
              class="btn btn-primary mt-6">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
