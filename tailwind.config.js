/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        AGT: ["AGT ABDUL MAJEED", "sans-serif"],
        Kapisa: ["AGT Kapisa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
