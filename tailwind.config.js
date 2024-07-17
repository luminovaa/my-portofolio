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
        // sans: ["Manga Temple", "sans-serif"],
        "manga-temple": ["Manga Temple", "sans-serif"],
        "baloo" : ["Baloo", "sans-serif"]
      },
      colors: {
        'utama': '#198695',
        'kedua': '#D52B1E',
      },
    },
  },
  plugins: [],
};