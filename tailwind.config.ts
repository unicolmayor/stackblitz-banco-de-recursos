/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/*.vue',
    './layouts/**/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/*.{js,vue,ts}',
    './src/**/*.{js,vue,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
