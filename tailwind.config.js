/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "manga-temple": ["Manga Temple", "sans-serif"],
      },
      colors: {
        "utama": "#49a9fc"
      }
    },
  },
  plugins: [],
};
