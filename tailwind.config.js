/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
  darkMode: ['selector', '[class="app-dark"]'],
  content: ['./src/**/*.{html,ts,scss,css}', './index.html'],
  plugins: [PrimeUI],
};
