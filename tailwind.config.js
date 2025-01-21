module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
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
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: '#16161D', // Eigengrau
          secondary: '#A9A9A9', // Subtle secondary gray
          accent: '#E0115F', // Ruby Red
          neutral: '#F5F5F5', // Neutral light gray
          'base-100': '#FFFFFF', // White background
          info: '#3ABFF8', // Default info color
          success: '#36D399', // Default success color
          warning: '#FBBD23', // Default warning color
          error: '#F87272', // Default error color
        },
      },
    ],
  },
};
