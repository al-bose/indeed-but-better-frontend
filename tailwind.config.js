/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'ibb-black': '#1a1e26',
        'ibb-dark-black': '#121212',
        'ibb-gradient-mid': '#1e2128',
        'ibb-light-black': '#1f242d',
        //'ibb-white': '#c6c7c8',
        'ibb-white': '#FFFFFF',
        'ibb-grey': '#c6c7c8',
        'ibb-dark-green': '#4db9a2',
        'ibb-darker-green': '#4ade80',
        'ibb-border-grey': '#2f3f4d',
        'ibb-button-grey': '#2f3f4d',
        'ibb-button-green-hover': '#57d7ba',
        'ibb-light-red': '#f75052',
        'ibb-dark-red': '#aa3738',
        'pure-white': '#FFFFFF'
      }},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
