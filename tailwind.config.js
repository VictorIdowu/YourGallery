/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#220326",
          200: "#4a494a",
          300: "#e9e9e9",
        },
        secondary: {
          100: "#6a2f70",
          200: "#301333",
        },
      },
      fontFamily: {
        body: ["Oxanium"],
      },
    },
    plugins: [],
  },
};
