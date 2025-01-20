module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}',
    './app.vue',
    './content/**/*.{md}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1200px',
        },
      },
    },
  },  
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
};
