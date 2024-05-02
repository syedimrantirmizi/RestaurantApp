/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Beer: {
          main : '#F88A22',
          light : '#f9a14e'},
        "Dark-Gunmetal": "#22262A",
        Nickel: "#878F99",
        "Antique-White": "#FAE8DC",
        White: "#FFFFFF",
      },
    },
    fontFamily: {
      "uncutsans-Medium": ["uncutsans-Medium"],
      "uncutsans-Bold": ["uncutsans-Bold"],
      "uncutsans-Semibold": ["uncutsans-Semibold"],
      "inter-Regular": ["inter-Regular"],
      "inter-Semibold": ["inter-Semibold"],
      "inter-Medium": ["inter-Medium"],
    },
  },
  plugins: [],
};
