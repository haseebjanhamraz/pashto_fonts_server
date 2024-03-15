/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-font": ['"AGT A Ali"', "AA Sameer Sagar Nastaleeq Bold"],
      },
    },
  },
  plugins: [],
};
