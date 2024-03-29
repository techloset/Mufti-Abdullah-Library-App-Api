/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      hanken: ["Hanken Grotesk", "sans-serif"],
    },
    colors: {
      primary: "#183B56",
      secondary: "#1565D8",
      black: "black",
      bgtertiary: "#A0A0A0",
      bgPrimary: "#E8F0FB",
      bgSecondry: "#B3BAC5",
      tersary: "#5A7184",
      bgRegister: "#FAAD13",
      bgbtn: "#E8F0FB",
      border: "#ECEEF2",
    },
    backgroundColor: {
      primary: "#183B56",
      secondary: "#1565D8",
      black: "black",
      bgtertiary: "#A0A0A0",
      bgPrimary: "#E8F0FB",
      bgSecondry: "#B3BAC5",
      bgRegister: "#FAAD13",
      bgbtn: "#E8F0FB",
      tersary: "#5A7184",
      bgtertiary: "#ECEEF2",
      border: "#ECEEF2",
      homeSecondry: "#F7F8F9",
    },
    textColor: {
      white: "#fff",
      black: "#000000",
      tersary: "#5A7184",
      primary: "#183B56",
      secondary: "#1565D8",
      black: "black",
      bgtertiary: "#A0A0A0",
      bgPrimary: "#E8F0FB",
      textHead: "#5A7184",
      bgSecondry: "#B3BAC5",
      bgRegister: "#FAAD13",
      bgbtn: "#E8F0FB",
    },
    placeholderColor: {
      placeholder: "#787878",
    },
  },
  plugins: [],
};
