// tailwind.config.js
import daisyui from "daisyui"
import tailwindcss from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
