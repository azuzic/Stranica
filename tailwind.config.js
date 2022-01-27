module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      "10px": "2.7vw",
      "12px": "3.2vw",
      "14px": "3.7vw",
      "16px": "4.2vw",
      "18px": "4.8vw",
      "20px": "5.4vw",
      "22px": "5.9vw",
      "24px": "6.4vw",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
