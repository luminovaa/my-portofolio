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
        sans: ["Manga Temple", "sans-serif"],
        "manga-temple": ["Manga Temple", "sans-serif"],
      },
      colors: {
        'straw-hat': '#D52B1E',
        'sea-blue': '#0077BE',
        'gold-roger': '#FFD700',
      },
    },
  },
  plugins: [],
};