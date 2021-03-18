module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
        brutalist: "blue",
      },
    },
    spacing: {
      0.5: "4px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
      11: "88px",
      12: "96px",
      13: "104px",
      14: "112px",
      15: "120px",
      16: "128px",
      large: "256px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
