/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "375px",
      },
    },
  },
  plugins: [],
};
