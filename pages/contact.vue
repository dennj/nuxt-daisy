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
          <li class="flex items-center space-x-2">
            <strong class="text-primary">Email:</strong>
            <a href="mailto:info@pluton.capital?subject=Business Inquiry&body=Dear Pluton Capital,%0D%0A%0D%0AI am an Investor/Broker/Seller working for ... %0D%0A%0D%0AI would like to inquire about ... %0D%0A%0D%0AThank you,%0D%0A[Your Name]"
              class="link link-primary">
              info@pluton.capital
            </a>
          </li>
          <li class="flex items-center space-x-2">
            <strong class="text-primary">Phone:</strong>
            <a href="tel:+353852569755" class="link link-primary">+353 85 256 9755</a>
          </li>
          <li class="flex items-center space-x-2">
            <!-- WhatsApp -->
            <a href="https://wa.me/353852569755" target="_blank"
              class="flex items-center space-x-2 text-black hover:text-primary">
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
          </li>
          <li class="py-4">
            <strong class="text-primary">Address:</strong>
            <address class="not-italic">
              The CHQ Building, <br />
              Custom House Quay, <br />
              Dublin 1, D01 Y6H7, <br />
              Ireland
            </address>
          </li>
        </ul>
      </div>

      <!-- Embedded Map (Google Maps) -->
      <div class="h-64 md:h-full rounded-lg overflow-hidden">
        <iframe class="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.933905208798!2d-6.245833684007658!3d53.34881277997988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80df7c1625%3A0x8c9075eab96c299b!2sThe%20CHQ%20Building!5e0!3m2!1sen!2sie!4v1674217893000!5m2!1sen!2sie"
          allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>