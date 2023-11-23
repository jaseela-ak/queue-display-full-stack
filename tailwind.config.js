/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-green-100",
    "bg-orange-100",
    "bg-blue-100",
    "text-green-800",
    "text-orange-800",
    "text-blue-800",
  ],
  theme: {
    extend: {},
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
