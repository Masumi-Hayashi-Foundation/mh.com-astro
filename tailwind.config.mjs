/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "museum-black": "#000",
        "museum-white": "#fff",
        "museum-red": "#b83237", // A muted variant of the original red
        "museum-gray": "#f0f0f0",
        "museum-beige": "#faf8f5",
        "museum-gold": "#bdaa8f", // Soft metallic gold for highlighting
      },
      boxShadow: {
        upward: "0 -4px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
};
