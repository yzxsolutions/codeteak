/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wave: ['Wave', 'sans-serif'],
         langits: ['Langits', 'sans-serif'],
      },
      keyframes: {
        "infinite-ribbon": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "infinite-ribbon-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "infinite-ribbon": "infinite-ribbon var(--ribbon-duration) linear infinite",
        "infinite-ribbon-reverse": "infinite-ribbon-reverse var(--ribbon-duration) linear infinite",
      },
    },
  },
  plugins: [],
}

