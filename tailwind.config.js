/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tapestry: "#aa5480",
        copper: "#e09178",
        tuft: "#facebb",
        mako: "#424752",
        desertstorm: "#efe5df",
        midnight: "#0b192f",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
