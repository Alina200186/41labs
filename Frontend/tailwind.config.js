module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        2: "var(--2)",
        black: { 900: "var(--black_900)" },
        blue_gray: { 100: "var(--blue_gray_100)" },
        green: { 400: "var(--green_400)", "900_7c": "var(--green_800_7c)" },
        light_green: { 50: "var(--light_green_50)" },
        neutrals: { 900: "var(--neutrals_900)" },
        teal: { 600: "var(--teal_600)", 700: "var(--teal_700)" },
        txt: { 0: "var(--txt_0)", 1: "var(--txt_1)" },
      },
      boxShadow: {},
      backgroundImage: {
        gradient: "linear-gradient(141deg, #068e7e,#1868347c)",
        gradient1: "linear-gradient(270deg, #007d6e,#5eb47c)",
      },
      fontFamily: { poppins: "Poppins", manrope: "Manrope" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
