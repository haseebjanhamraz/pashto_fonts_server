/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        loosed: "4.5",
        12: "5rem",
      },
      fontFamily: {
        sans: ['"PT Sans"', "sans-serif"],
        AGT: ["AGT ABDUL MAJEED", "sans-serif"],
        Kapisa: ["AGT Kapisa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
