/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  mode: 'jit',
  theme: {
    extend: {
      skew: {
        20: '20deg',
     },
     rotate: {
        110: '110deg',
        270: '270deg',
     },
    },
  },
  plugins: [],
}

