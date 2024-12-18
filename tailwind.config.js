/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "class",
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"]
  }
};