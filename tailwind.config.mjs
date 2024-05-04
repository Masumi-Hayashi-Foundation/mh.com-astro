/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        base: "16px",
        h1: "1.802rem",
        h2: "1.602rem",
        h3: "1.424rem",
        h4: "1.266rem",
        h5: "1.125rem",
        h6: "1rem",
        sm: "0.889rem",
        tiny: "0.79rem",
      },
      colors: {
        "museum-black": "#000",
        "museum-white": "#fff",
        "museum-red": "#b83237", // A muted variant of the original red
        "museum-gray": "#f0f0f0",
        "museum-beige": "#faf8f5",
        "museum-gold": "#bdaa8f", // Soft metallic gold for highlighting
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
